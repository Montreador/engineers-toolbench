# Toolbench — Engineer's Toolkit

A single-file, dependency-free engineering calculator bench. No build step, no backend — open `index.html` in a browser and it works.

Live at [machinetinker.com](https://machinetinker.com).

## Disciplines & tools

- **Electrical** — Ohm's Law, Voltage Divider, Resistor Codes, Voltage Drop, AC Power Triangle, AC Impedance, Power Factor Correction, DOL/Forward-Reverse/Star-Delta Starter Wiring References, Series/Parallel RLC
- **Mechanical** — Gear Ratio, Beam Deflection, Chain Pitch
- **Fluids & Thermal** — Reynolds Number
- **Controls** — RC/RL Filter, 555 Timer, Op-Amp Gain
- **Reference** — Unit Converter, Dimensional Analysis (formula verification + Buckingham π derivation)
- **Motors & Drives** — Motor Torque & Speed, Motor FLA & Inrush, VFD Cable Sizing
- **Plastics Processing** — Blown Film Process, Bubble Stress
- **Power Distribution** — PCB Trace Ampacity

Every tool follows the same interaction model: amber values are ones you **set**, cyan values are ones the tool **measures** (solves for). Most calculators accept any valid subset of inputs and solve for the rest live, with an SVG diagram that updates to match.

## Course

[`course/`](course/index.html) is a standalone 10-module interactive course, "3-Phase Drives & Motors" — linked from the sidebar, separate from the calculator tools above. Each module is its own self-contained HTML page (own styling, no shared dependencies) covering induction motor and VFD behavior hands-on: the rotating field, the torque-speed curve, star/delta, the equivalent circuit, PM/reluctance rotors, V/f control, the rectifier-bus-inverter-PWM chain, vector control, braking/regen, and reflected-wave effects.

## Running it

Just open `index.html` in any modern browser. To serve it locally instead:

```
python -m http.server 8000
```

then visit `http://localhost:8000/`.

## Contributing

Each tool is a self-contained JavaScript object (`id`, `discipline`, `title`, `subtitle`, `mount(root)`) registered in the `MODULES`/`DISCIPLINES` tables near the bottom of the file. Adding a new tool means adding one of these objects and a registry entry — no other wiring required.

## License

GPL-3.0 — see [LICENSE](LICENSE).
