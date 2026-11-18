# Worked Key 3: Practice Exam 3 (Fluids and Doppler)

Constants: g = 9.8 m/s², P₀ = 101,325 Pa, v_sound = 343 m/s, ρ_water = 1000 kg/m³. Keep full precision and round only at the end.

| # | Ans | # | Ans | # | Ans |
|---|---|---|---|---|---|
| 1 | **B** 283 kPa | 5 | **B** 1041 Hz | 9 | **D** 530 Hz |
| 2 | **D** 222 N | 6 | **E** (1270 Hz) | 10 | **B** 25.5 m/s |
| 3 | **A** 5.88 N | 7 | **C** 136 kPa | 11 | **C** 2183 Hz |
| 4 | **C** 13.8 m/s | 8 | **A** 12.4 m/s | 12 | **E** (20.3 rad/s) |

**Doppler sign rule:** f = f_s(v ± v_o)/(v ∓ v_s). Choose the signs so that moving toward each other raises the frequency and moving apart lowers it.

---

### 1. Absolute pressure on the diver: **B) 283 kPa**
**Formula:** P = P₀ + ρgh. The word "absolute" means include P₀.
1. ρgh = (1000)(9.8)(18.5) = 181,300 Pa.
2. P = 101,325 + 181,300 = 282,625 Pa = **283 kPa**.

### 2. Force on the small piston of the hydraulic lift: **D) 222 N**
**Formula:** Pascal's principle, F₁/A₁ = F₂/A₂
1. The areas scale with diameter squared: A₁/A₂ = (d₁/d₂)² = (3.0/24.0)² = 0.015625.
2. F₂ = mg = (1450)(9.8) = 14,210 N.
3. F₁ = 14,210 × 0.015625 = **222 N**.

### 3. Scale reading for the submerged object: **A) 5.88 N**
**Formulas:** W = mg, B = ρ_fluid·V·g, apparent weight = W − B
1. W = (2.50)(9.8) = 24.50 N.
2. B = (1000)(1.90 × 10⁻³)(9.8) = 18.62 N.
3. W − B = **5.88 N**.

### 4. Water speed in the narrow pipe: **C) 13.8 m/s**
**Formula:** Continuity, A₁v₁ = A₂v₂
1. Since A ∝ d², v₂ = v₁(d₁/d₂)².
2. v₂ = 2.40 × (6.0/2.5)² = 2.40 × 5.76 = **13.8 m/s**.

### 5. Siren heard as the ambulance approaches: **B) 1041 Hz**
**Formula:** f = f_s · v/(v − v_s), for a source moving toward a stationary observer
1. f = 950 × 343/(343 − 30.0) = 950 × 343/313 = **1041 Hz**.

### 6. Tone heard by the cyclist: **E) None of these (1270 Hz)**
**Formula:** f = f_s(v + v_o)/v, for an observer moving toward a stationary source
1. f = 1200 × (343 + 20.0)/343 = 1200 × 363/343 = **1270 Hz**.
2. That value isn't among the choices, so the answer is E.

### 7. Pressure in the narrow section (Bernoulli): **C) 136 kPa**
**Formulas:** A₁v₁ = A₂v₂, P₁ + ½ρv₁² = P₂ + ½ρv₂² (the pipe is horizontal, so the ρgy terms cancel)
1. Speed: v₂ = 1.80 × (8.0/4.0)² = 7.20 m/s.
2. Rearrange: P₂ = P₁ + ½ρ(v₁² − v₂²).
3. ½(1000)(1.80² − 7.20²) = 500(3.24 − 51.84) = −24,300 Pa.
4. P₂ = 160,000 − 24,300 = **136 kPa**. Faster flow means lower pressure.

### 8. Speed of water leaving the pressurized tank: **A) 12.4 m/s**
**Formula:** Bernoulli from the surface (point 1) to the hole (point 2)
1. At the surface: P = P₀ + 45,000, v ≈ 0, height h above the hole.
2. At the hole: P = P₀, speed v, height 0.
3. P₀ cancels, leaving ½ρv² = ΔP + ρgh, so v = √(2(ΔP/ρ + gh)).
4. v = √(2(45.0 + 31.36)) = √152.72 = **12.4 m/s**.

### 9. Motorcycle tone heard by the jogger: **D) 530 Hz**
**Formula:** f = f_s(v − v_o)/(v − v_s)
1. The motorcycle (source) moves toward the jogger, so the bottom is v − v_s.
2. The jogger (observer) moves away from the motorcycle, so the top is v − v_o.
3. f = 520 × (343 − 12.0)/(343 − 18.0) = 520 × 331/325 = **530 Hz**.

### 10. Speed of the car from two horn pitches: **B) 25.5 m/s**
**Formulas:** f_approach = f·v/(v − v_s), f_recede = f·v/(v + v_s)
1. Divide them so f cancels: r = f_approach/f_recede = (v + v_s)/(v − v_s).
2. r = 462/398 = 1.16080.
3. v_s = v(r − 1)/(r + 1) = 343(0.16080)/(2.16080) = **25.5 m/s**.

### 11. Frequency of the echo heard by the moving device: **C) 2183 Hz**
**Approach:** Two Doppler steps. The wall acts as a stationary observer, then as a stationary source.
1. Frequency the wall receives: f_wall = f_s · v/(v − v_s) = 2000 × 343/328 = 2091.5 Hz.
2. The device is now an observer moving toward the wall: f = f_wall(v + v_s)/v.
3. Combined: f = f_s(v + v_s)/(v − v_s) = 2000 × 358/328 = **2183 Hz**.

### 12. Turntable whistle, maximum spin rate: **E) None of these (20.3 rad/s)**
**Formulas:** f_max/f_min = (v + v_s)/(v − v_s), v_s = ωR
1. r = 3410/3120 = 1.09295.
2. v_s = 343(0.09295)/(2.09295) = 15.23 m/s.
3. ω = v_s/R = 15.23 / 0.75 = **20.3 rad/s**.
4. That value isn't among the choices, so the answer is E.
