"""Financial projection model for the college startup research report.

Every number in the report's projection tables comes from this file.
Change any price, hours, cost, or volume assumption below, then run:

    python3 model/financial_model.py            # print all tables
    python3 model/financial_model.py --write    # (re)write tables into report/*.md between markers

Operating profit = revenue - variable costs - recurring fixed costs.
It is BEFORE owner taxes and BEFORE paying the partners. One-time startup
purchases are excluded (see each idea's startup-cost table).

Stream fields: price ($/unit), ph (person-hours per unit), vc ($ variable cost per unit),
vp (variable cost as % of revenue). 'fixed' and 'admin' are monthly $ and hours.
"""
# Financial model for the 10 opportunities. Generates markdown tables.
# Each stream: name, price, person_hours_per_unit, var_cost_per_unit, var_pct
# Each scenario: dict month -> {stream: units}
import sys, re, pathlib

def calc(streams, units, fixed, admin_hours):
    rev = 0; var = 0; hrs = admin_hours; desc=[]
    for s in streams:
        n = units.get(s['name'], 0)
        if n == 0: continue
        r = n * s['price']; rev += r
        var += n * s.get('vc', 0) + r * s.get('vp', 0)
        hrs += n * s['ph']
        desc.append(f"{n} {s['label']} × ${s['price']:,}")
    profit = rev - var - fixed
    pp = profit / 2
    hpp = hrs / 2
    hourly = pp / hpp if hpp else 0
    return dict(desc="; ".join(desc) or "—", rev=rev, cost=var+fixed, profit=profit, pp=pp, hpp=hpp, hourly=hourly)

def fmt(x):
    return ("-$" if x < 0 else "$") + f"{abs(round(x)):,}"

def table(model):
    out = ["| Scenario | Month | Volume × price | Revenue | Operating costs | Operating profit | Per partner | Hrs/partner/mo | Effective $/hr |",
           "|---|---|---|---|---|---|---|---|---|"]
    res = {}
    for sc in ["Conservative", "Base", "Optimistic"]:
        for m, units in model['scen'][sc].items():
            fixed = model['fixed'][m] if isinstance(model['fixed'], dict) else model['fixed']
            admin = model['admin'][m] if isinstance(model['admin'], dict) else model['admin']
            r = calc(model['streams'], units, fixed, admin)
            res[(sc, m)] = r
            out.append(f"| {sc} | {m} | {r['desc']} | {fmt(r['rev'])} | {fmt(r['cost'])} | **{fmt(r['profit'])}** | {fmt(r['pp'])} | {round(r['hpp'])} | {fmt(r['hourly'])} |")
    return "\n".join(out), res

M = {}
# 1. Window cleaning: storefront accounts billed monthly (~2 visits), residential jobs
M['windows'] = dict(
  streams=[dict(name='sf', label='storefront accts', price=60, ph=0.9, vp=0.05),
           dict(name='res', label='residential jobs', price=250, ph=5, vp=0.06)],
  fixed={'M1':160,'M3':110,'M6':120,'M12':140}, admin={'M1':30,'M3':20,'M6':20,'M12':24},
  scen={'Conservative':{'M1':{'sf':4,'res':1},'M3':{'sf':9,'res':2},'M6':{'sf':15,'res':3},'M12':{'sf':22,'res':4}},
        'Base':{'M1':{'sf':6,'res':2},'M3':{'sf':14,'res':4},'M6':{'sf':24,'res':6},'M12':{'sf':36,'res':9}},
        'Optimistic':{'M1':{'sf':10,'res':3},'M3':{'sf':22,'res':6},'M6':{'sf':36,'res':10},'M12':{'sf':52,'res':14}}})
# 2. Pet waste: recurring customers ($80/mo avg, ~4.3 visits) + one-time initial cleanups
M['petwaste'] = dict(
  streams=[dict(name='rec', label='recurring yards', price=80, ph=1.7, vp=0.08),
           dict(name='clean', label='initial cleanups', price=100, ph=1.5, vp=0.05)],
  fixed={'M1':170,'M3':120,'M6':130,'M12':140}, admin={'M1':25,'M3':15,'M6':15,'M12':18},
  scen={'Conservative':{'M1':{'rec':4,'clean':3},'M3':{'rec':12,'clean':4},'M6':{'rec':22,'clean':3},'M12':{'rec':32,'clean':2}},
        'Base':{'M1':{'rec':6,'clean':5},'M3':{'rec':18,'clean':6},'M6':{'rec':35,'clean':5},'M12':{'rec':55,'clean':4}},
        'Optimistic':{'M1':{'rec':10,'clean':8},'M3':{'rec':28,'clean':8},'M6':{'rec':50,'clean':7},'M12':{'rec':80,'clean':6}}})
# 3. Tutoring agency: partner-taught sessions + contractor-taught sessions
M['tutoring'] = dict(
  streams=[dict(name='own', label='partner sessions', price=50, ph=1.3, vp=0.03),
           dict(name='con', label='contractor sessions', price=55, ph=0.2, vc=27, vp=0.03)],
  fixed={'M1':90,'M3':70,'M6':90,'M12':110}, admin={'M1':15,'M3':10,'M6':16,'M12':24},
  scen={'Conservative':{'M1':{'own':12},'M3':{'own':28},'M6':{'own':36,'con':16},'M12':{'own':36,'con':50}},
        'Base':{'M1':{'own':20},'M3':{'own':40,'con':8},'M6':{'own':44,'con':40},'M12':{'own':44,'con':110}},
        'Optimistic':{'M1':{'own':28},'M3':{'own':48,'con':24},'M6':{'own':52,'con':80},'M12':{'own':52,'con':200}}})
# 4. Exterior cleaning (pressure/soft wash), in-season months
M['pressure'] = dict(
  streams=[dict(name='job', label='jobs', price=325, ph=7, vc=25, vp=0.04)],
  fixed={'M1':260,'M3':190,'M6':190,'M12':200}, admin={'M1':25,'M3':16,'M6':16,'M12':18},
  scen={'Conservative':{'M1':{'job':2},'M3':{'job':5},'M6':{'job':8},'M12':{'job':10}},
        'Base':{'M1':{'job':3},'M3':{'job':8},'M6':{'job':13},'M12':{'job':17}},
        'Optimistic':{'M1':{'job':5},'M3':{'job':12},'M6':{'job':19},'M12':{'job':26}}})
# 5. Mobile interior detailing
M['detail'] = dict(
  streams=[dict(name='job', label='details', price=150, ph=3.5, vc=15, vp=0.04)],
  fixed={'M1':150,'M3':100,'M6':100,'M12':110}, admin={'M1':20,'M3':12,'M6':12,'M12':14},
  scen={'Conservative':{'M1':{'job':4},'M3':{'job':10},'M6':{'job':15},'M12':{'job':18}},
        'Base':{'M1':{'job':6},'M3':{'job':14},'M6':{'job':22},'M12':{'job':30}},
        'Optimistic':{'M1':{'job':9},'M3':{'job':20},'M6':{'job':32},'M12':{'job':42}}})
# 6. Website + Google Business Profile subscription
M['web'] = dict(
  streams=[dict(name='sub', label='active subs', price=149, ph=1.5, vc=18, vp=0.03),
           dict(name='new', label='new builds (setup fee)', price=200, ph=16, vp=0.03)],
  fixed={'M1':60,'M3':60,'M6':70,'M12':80}, admin={'M1':40,'M3':30,'M6':30,'M12':30},
  scen={'Conservative':{'M1':{'sub':1,'new':1},'M3':{'sub':3,'new':1},'M6':{'sub':5,'new':1},'M12':{'sub':9,'new':1}},
        'Base':{'M1':{'sub':2,'new':2},'M3':{'sub':5,'new':1},'M6':{'sub':9,'new':2},'M12':{'sub':16,'new':2}},
        'Optimistic':{'M1':{'sub':3,'new':3},'M3':{'sub':8,'new':2},'M6':{'sub':15,'new':3},'M12':{'sub':26,'new':3}}})
# 7. STR turnover cleaning
M['str'] = dict(
  streams=[dict(name='turn', label='turnovers', price=95, ph=2.6, vc=12, vp=0.04)],
  fixed={'M1':120,'M3':80,'M6':80,'M12':90}, admin={'M1':20,'M3':12,'M6':14,'M12':16},
  scen={'Conservative':{'M1':{'turn':6},'M3':{'turn':18},'M6':{'turn':30},'M12':{'turn':40}},
        'Base':{'M1':{'turn':10},'M3':{'turn':28},'M6':{'turn':48},'M12':{'turn':65}},
        'Optimistic':{'M1':{'turn':15},'M3':{'turn':40},'M6':{'turn':70},'M12':{'turn':95}}})

def seasonal(name, rows):
    out = ["| Scenario | Period | Volume × price | Revenue | Operating costs | Operating profit | Per partner | Hrs/partner | Effective $/hr |",
           "|---|---|---|---|---|---|---|---|---|"]
    res={}
    for sc, per, desc, rev, cost, hrs_total in rows:
        p = rev - cost; pp = p/2; hpp = hrs_total/2
        res[(sc,per)] = dict(rev=rev,cost=cost,profit=p,pp=pp,hpp=hpp)
        out.append(f"| {sc} | {per} | {desc} | {fmt(rev)} | {fmt(cost)} | **{fmt(p)}** | {fmt(pp)} | {round(hpp)} | {fmt(pp/hpp if hpp else 0)} |")
    return "\n".join(out), res

# 8. Holiday lights: season (Nov-Jan). Avg ticket $500 incl. lease of lights; material $140/job season-1 (reusable),
# $45/job in season 2 for repeat customers (lights already owned). Hours: 7 install + 3 removal person-hours + 2 sales/est.
def hl(jobs, repeat=0, ticket=500, mat_new=140, mat_rep=45, fixed=450, extra_hours=40):
    new = jobs - repeat
    rev = jobs*ticket
    cost = new*mat_new + repeat*mat_rep + rev*0.04 + fixed
    hrs = jobs*12 + extra_hours
    return rev, cost, hrs
rows=[]
for sc,(j1,j2,rep) in {'Conservative':(6,10,4),'Base':(12,22,8),'Optimistic':(20,34,14)}.items():
    r,c,h = hl(j1); rows.append((sc,'Season 1 (Nov–Jan)',f"{j1} homes × $500",r,c,h))
    r,c,h = hl(j2,rep,fixed=350); rows.append((sc,'Season 2 (Nov–Jan)',f"{j2} homes × $500 ({rep} repeat)",r,c,h))
M['lights_t'] = seasonal('lights', rows)

# 9. Move-out storage + moving labor. Storage: avg $180/customer for summer (≈6–8 items), labor jobs $300 (2 movers x 3h incl. travel, 7 person-hrs)
def stor(cust, labor, unit_months=4, unit_cost=260, truck_days=6, box_cost=6):
    rev = cust*180 + labor*300
    cost = unit_months*unit_cost*max(1, round(cust/30)) + truck_days*150 + cust*(box_cost*2) + rev*0.04 + 300  # 300 insurance/permits/marketing
    hrs = cust*3 + labor*7 + 60
    return rev,cost,hrs
rows=[]
for sc,(c1,l1,c2,l2) in {'Conservative':(25,6,50,12),'Base':(45,10,90,20),'Optimistic':(70,16,150,30)}.items():
    days1 = 4 if c1<40 else 6; days2 = 6 if c2<100 else 10
    r,c,h = stor(c1,l1,truck_days=days1); rows.append((sc,'Move-out season 1 (May–Aug)',f"{c1} storage customers × $180 + {l1} moving jobs × $300",r,c,h))
    r,c,h = stor(c2,l2,truck_days=days2); rows.append((sc,'Move-out season 2',f"{c2} storage × $180 + {l2} moving × $300",r,c,h))
M['storage_t'] = seasonal('storage', rows)

# 10. Move-out furniture resale: acquire in May (free–$20), store over summer, sell Aug–Sep
def resale(items, price, acq=10, unit=900, truck=450):
    sold = round(items*0.8)
    rev = sold*price
    cost = items*acq + unit + truck + 100
    hrs = items*2.5 + 30
    return rev,cost,hrs,sold
rows=[]
for sc,(n,p) in {'Conservative':(30,55),'Base':(60,65),'Optimistic':(100,70)}.items():
    r,c,h,s = resale(n,p); rows.append((sc,'One move-out cycle (May–Sep)',f"{n} items sourced, {s} sold × ${p}",r,c,h))
M['resale_t'] = seasonal('resale', rows)


TABLES = {}
for k in ['windows','petwaste','tutoring','pressure','detail','web','str']:
    TABLES[k] = table(M[k])[0]
for k in ['lights_t','storage_t','resale_t']:
    TABLES[k] = M[k][0]

if __name__ == '__main__':
    if '--write' in sys.argv:
        root = pathlib.Path(__file__).resolve().parent.parent / 'report'
        for f in sorted(root.glob('*.md')):
            text = f.read_text()
            new = re.sub(r'<!-- table:(\w+) -->.*?<!-- /table -->',
                         lambda m: f'<!-- table:{m.group(1)} -->\n{TABLES[m.group(1)]}\n<!-- /table -->',
                         text, flags=re.S)
            new = re.sub(r'\{\{T:(\w+)\}\}',
                         lambda m: f'<!-- table:{m.group(1)} -->\n{TABLES[m.group(1)]}\n<!-- /table -->', new)
            if new != text:
                f.write_text(new); print('updated', f.name)
    else:
        for k, t in TABLES.items():
            print('### ' + k); print(t); print()
