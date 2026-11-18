# Worked Key 1: Official Practice Test 3 (version 175)

Constants: g = 9.8 m/s², P₀ = 101,325 Pa, v_sound = 343 m/s. Keep full precision and round only at the end.

| # | Ans | # | Ans | # | Ans |
|---|---|---|---|---|---|
| 1 | **C** 29.5 m | 5 | **A** 501 W | 9 | **B** 104 rad/s² |
| 2 | **D** 3.48 s | 6 | **C** 2.35 m | 10 | **B** 154 N |
| 3 | **D** 138 kPa | 7 | **C** 195 kN | 11 | **C** 23.5 rad/s |
| 4 | **D** 108 kg·m² | 8 | **D** 17.8 rad/s | 12 | **A** 11.2 kg |

---

### 1. Wavelength of the porpoise's sound: **C) 29.5 m**
**Formula:** v = fλ
1. Solve for λ: λ = v/f.
2. λ = 1560 / 52.88 = **29.5 m**.

### 2. Time to spin up the wheel: **D) 3.48 s**
**Formula:** ω = ω₀ + αt
1. "From rest" means ω₀ = 0, so t = ω/α.
2. t = 44.20 / 12.7 = **3.48 s**.

### 3. Gauge pressure under the cylinder: **D) 138 kPa**
**Formulas:** P = F/A, F = mg, A = πr²
1. Weight: F = (17,010)(9.8) = 166,698 N.
2. Area: r = 1.24/2 = 0.62 m, so A = π(0.62)² = 1.2076 m².
3. P = 166,698 / 1.2076 = 138,038 Pa = **138 kPa**. It's gauge pressure, so don't add P₀.

### 4. Fan's moment of inertia: **D) 108 kg·m²**
**Formulas:** α = Δω/Δt, Στ = Iα
1. α = 1.50 / 43.2 = 0.03472 rad/s².
2. I = τ/α = 3.75 / 0.03472 = **108 kg·m²**.

### 5. Blackbody power at the new temperature: **A) 501 W**
**Formula:** P = eσAT⁴, so P ∝ T⁴
1. Set up a ratio: P₂ = P₁(T₂/T₁)⁴. The e, σ and A cancel.
2. T₂/T₁ = 2680/2250 = 1.1911. Raised to the 4th power, that's 2.0128.
3. P₂ = 249.0 × 2.0128 = **501 W**.

### 6. Pendulum length: **C) 2.35 m**
**Formula:** f = (1/2π)√(g/L), rearranged to L = g/(4π²f²)
1. The bob's mass (25.7 kg) is a distractor. It doesn't appear in the formula.
2. 4π²f² = 4π²(0.3250)² = 4.1699.
3. L = 9.8 / 4.1699 = **2.35 m**.

### 7. Force on the submarine window: **C) 195 kN**
**Formulas:** P = P₀ + ρgh, F = PA, A = πd²/4
1. The note asks for the full force of the water, so use absolute pressure.
2. ρgh = (1025)(9.8)(248.9) = 2,500,201 Pa. Adding P₀ gives P = 2,601,526 Pa.
3. A = π(0.309)²/4 = 0.07499 m². Convert cm to m first.
4. F = 2,601,526 × 0.07499 = 195,090 N = **195 kN**.

### 8. Skater's final spin: **D) 17.8 rad/s**
**Formula:** I₁ω₁ = I₂ω₂ (no external torque)
1. ω₂ = ω₁(I₁/I₂).
2. ω₂ = 15.20 × 41.0/35.0 = **17.8 rad/s**.

### 9. Angular acceleration from θ(t): **B) 104 rad/s²**
**Formulas:** ω = dθ/dt, α = dω/dt
1. θ = 1.25t⁴ + 1.50t³ + 7.82t.
2. ω = 5.00t³ + 4.50t² + 7.82.
3. α = 15.0t² + 9.00t.
4. At t = 2.351 s: α = 82.91 + 21.16 = **104 rad/s²**.

### 10. Sphere held against a rough wall: **B) 154 N**
**Formulas:** ΣF = 0, Στ = 0
1. The string pulls tangentially at radius R. Friction f acts at the wall, also at radius R.
2. Torques about the center: FR = fR, so **f = F**.
3. Vertical forces: F sinθ + f = mg, so F(1 + sinθ) = mg. Here θ is measured from the horizontal.
4. F = (25.00)(9.8) / (1 + sin 36.2°) = 245.0 / 1.5906 = **154 N**.

### 11. Turntable horn, maximum spin rate: **C) 23.5 rad/s**
**Formulas:** f_max = f·v/(v − v_s), f_min = f·v/(v + v_s), v_s = ωR
1. Divide the two equations: f_max/f_min = (v + v_s)/(v − v_s).
2. r = 7742/6520 = 1.18742.
3. Solve for v_s: v_s = v(r − 1)/(r + 1) = 343(0.18742)/(2.18742) = 29.39 m/s.
4. ω = v_s/R = 29.39 / 1.25 = **23.5 rad/s**.

### 12. Pulley mass (incline and hanging block): **A) 11.2 kg**
**Formulas:** ΣF = ma for each block, Στ = Iα for the pulley, I = ½MR², α = a/R
1. Hanging block m₂, moving down: m₂g − T₂ = m₂a, so T₂ = 22.0(9.8 − 5.333) = 98.27 N.
2. Block m₁, moving up the incline: T₁ − m₁g sinθ = m₁a, so T₁ = 6.10(5.333 + 5.880) = 68.40 N.
3. Pulley: (T₂ − T₁)R = (½MR²)(a/R), which simplifies to T₂ − T₁ = ½Ma.
4. M = 2(98.27 − 68.40) / 5.333 = **11.2 kg**.
