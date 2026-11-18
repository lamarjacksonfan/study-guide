# PHYS 1443 – Test 3 Study Guide (Fall 2026, Spurlock)

Built from your **Practice Test 3** (12 questions, 5 answers + "None of these" format) and the syllabus pages you sent (Lectures 13–19). I could only see the practice test and two syllabus pages, so **check the scope against your syllabus**. If Lecture 19+ is not covered, skip sections 8–9.

Use g = 9.8 m/s², speed of sound in air = 343 m/s, P₀ = 101,325 Pa unless the problem says otherwise.

---

## 0. The 6-hour plan

| Time | Do this |
|---|---|
| 0:00–0:20 | Skim this guide. Mark any topic you can't do from memory. |
| 0:20–1:30 | **Rotation:** sections 1–3. Redo practice Q2, 4, 8, 9, 12. |
| 1:30–2:30 | **Static equilibrium and torque:** section 4. Redo Q10. |
| 2:30–2:40 | Break. Eat, walk. |
| 2:40–3:40 | **Fluids:** sections 5–6. Redo Q3, 7. |
| 3:40–4:40 | **Oscillations, waves, sound, Doppler:** section 7. Redo Q1, 6, 11. |
| 4:40–5:20 | **Heat and thermal:** sections 8–9. Redo Q5. |
| 5:20–5:50 | Redo any practice problems you missed. Do a final pass of the cheat list in section 11. |
| 5:50–6:00 | Pack: calculator, pencil, UTA ID, Scantron info (test version, room-seat). |

Rules for the last hours: don't learn brand-new topics after the 5-hour mark, and sleep if you can. Mistakes on this test are usually setup or unit errors, not hard physics.

---

## 1. Rotational kinematics (Lectures 13–14)

Rotation mirrors linear motion. Swap x→θ, v→ω, a→α.

| Linear | Rotational |
|---|---|
| v = v₀ + at | **ω = ω₀ + αt** |
| Δx = v₀t + ½at² | **Δθ = ω₀t + ½αt²** |
| v² = v₀² + 2aΔx | **ω² = ω₀² + 2αΔθ** |

- Link to linear: **s = rθ, v = rω, a_tangential = rα, a_centripetal = rω² = v²/r**
- Convert units first: 1 rev = 2π rad; rpm × 2π/60 = rad/s.
- **Calculus version** (practice Q9): ω = dθ/dt and α = dω/dt = d²θ/dt². Differentiate the power law, then plug in t.
  - Example: θ = 1.25t⁴ + 1.50t³ + 7.82t gives α = 15t² + 9t, so at t = 2.351 s α = 104 rad/s².
- Trap: "starts from rest" means ω₀ = 0.

## 2. Torque, moment of inertia and Newton's 2nd law for rotation

- **τ = rF sinφ**, where φ is the angle between r and F, or τ = F·(lever arm). Counter-clockwise is positive.
- **Στ = Iα** (rotation's F = ma).
- Moments of inertia (I = Σmr²):

| Object | I |
|---|---|
| Point mass at radius r | mr² |
| Thin hoop / narrow cylindrical shell | MR² |
| **Solid disk / cylinder** (axis through center) | **½MR²** |
| Solid sphere | ²⁄₅MR² |
| Thin rod, about center | ¹⁄₁₂ML² |
| Thin rod, about end | ¹⁄₃ML² |

- Parallel-axis theorem: I = I_cm + Md².
- **Pulley problems** (practice Q12):
  1. Draw a free-body diagram for each mass and write Newton's 2nd law for each. The two tensions are **different** when the pulley has mass.
  2. For the pulley, (T₂ − T₁)R = Iα with α = a/R (no slipping).
  3. Solve for the unknown.
  4. The pulley's mass drops out of R, leaving **T₂ − T₁ = ½Ma** for a solid disk.
  - Note: Q12 says "narrow cylindrical disk", which I read as a solid disk (I = ½MR²).

## 3. Rotational energy and angular momentum

- KE_rot = ½Iω². Rolling without slipping: KE_total = ½mv² + ½Iω², with v = ωR.
- Work by torque: W = τΔθ. Power: P = τω.
- **Angular momentum: L = Iω** (or L = mvr for a point mass).
- **Conservation (no external torque): I₁ω₁ = I₂ω₂** (practice Q8: skater pulls arms in, I drops, ω rises).
  - ω_f = 15.20 × 41.0/35.0 = 17.8 rad/s.
- Net torque = dL/dt.

## 4. Static equilibrium (Lecture 14)

Two conditions, both equal to zero:

1. **ΣFₓ = 0 and ΣF_y = 0**
2. **Στ = 0** about **any** point.

**Strategy:**
1. Draw a free-body diagram. Mark where each force acts.
2. Choose the pivot at the point where the most unknown forces act. Those forces then have zero torque and drop out.
3. Write Στ = 0, then ΣF = 0.
4. Weight acts at the center of mass (the middle of a uniform beam).

**Practice Q10 (sphere on a wall, string wrapped around the sphere, rough wall):**
- The string pulls tangentially at distance R from the center. The wall's friction acts at distance R. Taking torques about the center gives **f = F**.
- Vertical forces: F sinθ + f = mg, so F(1 + sinθ) = mg.
- F = (25.00)(9.8)/(1 + sin 36.2°) = **154 N**.
- I measured θ from the horizontal, which is what gives an answer inside the choices. The figure is small, so check how θ is drawn on your copy.

## 5. Elasticity, density and pressure (Lecture 15)

- Density **ρ = m/V**. Water 1000 kg/m³, sea water 1025 kg/m³.
- Pressure **P = F/A** (Pa = N/m²). Disk area A = πr² = π(d/2)².
  - **Practice Q3:** gauge pressure from a weight is P = mg/A = (17,010)(9.8)/(π(0.62)²) = **138 kPa**. "Gauge" means no atmosphere is added.
- Elastic moduli (stress/strain):
  - Young's modulus: F/A = Y(ΔL/L₀)
  - Shear: F/A = S(Δx/h)
  - Bulk: ΔP = −B(ΔV/V₀)
- Hydrostatic pressure: **P = P₀ + ρgh**.
  - **Absolute** pressure includes P₀. **Gauge** pressure is just ρgh.
  - Pascal's principle: in a hydraulic lift, F₁/A₁ = F₂/A₂.

**Practice Q7 (submarine window):**
- The question asks for the force of the water, so use the absolute pressure: F = (P₀ + ρgh)A.
- (101,325 + 1025·9.8·248.9)·π(0.309)²/4 = **195 kN**.
- Using only ρgh gives 187 kN, which is not a choice. The note in the question is the tell to include P₀.

## 6. Buoyancy, continuity and Bernoulli (Lectures 15–16)

- **Buoyant force: B = ρ_fluid · V_displaced · g** (equals the weight of the displaced fluid).
  - Floating: ρ_object/ρ_fluid = fraction submerged.
  - Apparent weight when submerged = W − B.
- **Continuity:** A₁v₁ = A₂v₂. Narrower pipe means faster flow.
- **Bernoulli:** P₁ + ½ρv₁² + ρgy₁ = P₂ + ½ρv₂² + ρgy₂.
  - Torricelli (hole in a tank): v = √(2gh).
  - Faster flow means lower pressure (lift, venturi).

## 7. Oscillations, waves, sound and Doppler (Lectures 16–18)

**Simple harmonic motion (spring):**
- ω = 2πf = 2π/T, **T = 1/f**.
- Spring: ω = √(k/m), so T = 2π√(m/k).
- x(t) = A cos(ωt + φ), v_max = Aω, a_max = Aω².
- Energy: E = ½kA². v = ±ω√(A² − x²).

**Pendulum (small angle):**
- **T = 2π√(L/g)**, so f = (1/2π)√(g/L) and **L = g/(4π²f²)**.
- The mass does not matter, so the 25.7 kg in practice Q6 is a distractor.
- Q6: L = 9.8/(4π² · 0.3250²) = **2.35 m**.

**Waves:**
- **v = fλ** (practice Q1: λ = 1560/52.88 = **29.5 m**).
- String wave speed: v = √(T/μ).
- Sound speed in air is about 343 m/s at 20 °C (≈ 331 + 0.6T_C).
- Sound intensity: I = P/A = P/(4πr²). Intensity level: β = 10 log₁₀(I/I₀), I₀ = 10⁻¹² W/m².
- Standing waves:
  - String fixed at both ends, or a pipe open at both ends: fₙ = n·v/2L.
  - Pipe closed at one end: fₙ = n·v/4L, with odd n only.

**Doppler effect:**

f_obs = f_s · (v ± v_obs)/(v ∓ v_src)

- Toward each other raises the pitch. Away from each other lowers it.
- Top sign for the observer moving **toward** the source. Bottom sign for the source moving **toward** the observer.

**Practice Q11 (horn on a turntable):**
- The highest frequency is when the horn moves toward the mic: f_max = f·v/(v − v_s). The lowest is when it moves away: f_min = f·v/(v + v_s).
- The ratio gives f_max/f_min = (v + v_s)/(v − v_s) = 7742/6520 = 1.1874.
- Solve: v_s = v(r − 1)/(r + 1) = 343(0.1874)/(2.1874) = 29.39 m/s.
- ω = v_s/R = 29.39/1.25 = **23.5 rad/s**.
- Use v = 343 m/s. With 340 you would get 23.3.

## 8. Temperature, thermal expansion and heat (Lecture 18)

- Temperature conversions: T_K = T_C + 273.15, T_F = (9/5)T_C + 32.
- **Linear expansion: ΔL = αL₀ΔT.** Area: ΔA = 2αA₀ΔT. Volume: **ΔV = βV₀ΔT** (β ≈ 3α).
- **Heat: Q = mcΔT.** Water c = 4186 J/kg·K.
- **Calorimetry:** Q_gained = Q_lost, or ΣQ = 0. The final temperature lies between the starting temperatures.
- **Phase change (Lecture 19): Q = mL.** Latent heat of fusion for ice is 3.34 × 10⁵ J/kg and of vaporization for water is 2.26 × 10⁶ J/kg.
  - The temperature stays constant during a phase change.
  - Heating ice to steam is a sum of steps: heat the ice, melt it, heat the water, boil it, and so on.

## 9. Heat transfer and gases (Lectures 19–20)

- **Conduction: P = Q/t = kA(T_hot − T_cold)/L.**
- **Radiation: P = eσAT⁴**, with σ = 5.67 × 10⁻⁸ W/m²K⁴ and T in kelvin.
  - Ratio problems (practice Q5): P₂ = P₁(T₂/T₁)⁴ = 249.0 × (2680/2250)⁴ = **501 W**. The unit conversions cancel in a ratio, but T must be in kelvin.
  - Net radiation from an object in its surroundings: P_net = eσA(T⁴ − T_env⁴).
- **Convection:** just know it is heat carried by fluid motion.
- **Ideal gas law:** PV = nRT = Nk_BT, with R = 8.314 J/mol·K and k_B = 1.38 × 10⁻²³ J/K. T must be in kelvin.
- Kinetic theory: average KE per molecule = (3/2)k_BT, v_rms = √(3RT/M) = √(3k_BT/m).
- Thermodynamics basics: ΔU = Q − W, and ΔU = (3/2)nRΔT for a monatomic ideal gas.

---

## 10. Practice Test 3 answer key with quick solutions

| # | Answer | Key idea |
|---|---|---|
| 1 | **C) 29.5 m** | λ = v/f = 1560/52.88 |
| 2 | **D) 3.48 s** | t = (ω − ω₀)/α = 44.20/12.7 |
| 3 | **D) 138 kPa** | P = mg/A, A = π(0.62)² |
| 4 | **D) 108 kg·m²** | α = 1.50/43.2, I = τ/α = 3.75 ÷ 0.03472 |
| 5 | **A) 501 W** | P ∝ T⁴, so 249.0 × (2680/2250)⁴ |
| 6 | **C) 2.35 m** | L = g/(4π²f²), mass irrelevant |
| 7 | **C) 195 kN** | F = (P₀ + ρgh)A, absolute pressure |
| 8 | **D) 17.8 rad/s** | I₁ω₁ = I₂ω₂ |
| 9 | **B) 104 rad/s²** | α = d²θ/dt² = 15t² + 9t at t = 2.351 |
| 10 | **B) 154 N** | Torque about center gives f = F, then F(1 + sinθ) = mg (angle read as measured from horizontal) |
| 11 | **C) 23.5 rad/s** | Doppler ratio, then ω = v_s/R |
| 12 | **A) 11.2 kg** | m₂g − T₂ = m₂a, T₁ − m₁g sinθ = m₁a, T₂ − T₁ = ½Ma |

**Q12 in numbers:** M = 2[m₂(g − a) − m₁(a + g sinθ)]/a = 2[22.0(9.8 − 5.333) − 6.10(5.333 + 9.8·0.6)]/5.333 = **11.2 kg**.

Q2, Q4, Q8 and Q9 are quick plug-and-chug questions. Do those first and bank the points.

---

## 11. Last-minute cheat list

**Common mistakes to avoid**
- Kelvin for radiation and gas laws. Radians for angular quantities.
- Gauge vs absolute pressure. Read the wording.
- Pendulum period does not depend on mass. Spring period does not depend on amplitude.
- With a massive pulley, the two tensions differ.
- Doppler signs: toward means a higher frequency.
- Use the full-precision answer and compare to the choices. If nothing is within rounding, pick E ("None of these"), but first recheck units and the g value.

**Answer-format tips**
- The choices are spaced very close together (about 1%). Keep at least 4 significant figures through the calculation and round only at the end.
- Mark answers on the test paper too, so you can check the grading.
- Do the fast problems first. Skip and return to anything that needs a long setup.

**Quick formula recall**
- **ω = ω₀ + αt**, **θ = ω₀t + ½αt²**, **ω² = ω₀² + 2αθ**
- **τ = Fr sinφ**, **Στ = Iα**, **L = Iω**
- **P = P₀ + ρgh**, **B = ρVg**, **A₁v₁ = A₂v₂**, **Bernoulli**
- **T = 2π√(L/g)**, **T = 2π√(m/k)**, **v = fλ**
- **Doppler:** f' = f(v ± v_o)/(v ∓ v_s)
- **Q = mcΔT**, **Q = mL**, **P = eσAT⁴**, **PV = nRT**

Good luck.
