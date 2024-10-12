# px_to_percent_extension
 Convert units; pixel to percent for selected webpage element

 Converting pixels (`px`) to other CSS units like `em`, `rem`, `vh`, `vw`, and percentages involves understanding the context and basis for each unit. Here are the formulas for converting pixels to these units:

### 1. **Pixels to `em`**
`em` units are relative to the font size of the element they are used in. To convert `px` to `em`, you can use the formula:

\[
\text{value in em} = \frac{\text{value in px}}{\text{font size in px of the parent element}}
\]

### Example:
If the parent element's font size is `16px` and you want to convert `32px` to `em`:

\[
\text{value in em} = \frac{32\text{px}}{16\text{px}} = 2 \text{em}
\]

### 2. **Pixels to `rem`**
`rem` units are relative to the root element (`<html>`) font size. To convert `px` to `rem`, use the formula:

\[
\text{value in rem} = \frac{\text{value in px}}{\text{font size in px of the root element}}
\]

### Example:
If the root font size is `16px` and you want to convert `32px` to `rem`:

\[
\text{value in rem} = \frac{32\text{px}}{16\text{px}} = 2 \text{rem}
\]

### 3. **Pixels to `vh`**
`vh` units represent a percentage of the viewport height. To convert `px` to `vh`, you can use the formula:

\[
\text{value in vh} = \left(\frac{\text{value in px}}{\text{viewport height in px}}\right) \times 100
\]

### Example:
If the viewport height is `800px` and you want to convert `40px` to `vh`:

\[
\text{value in vh} = \left(\frac{40\text{px}}{800\text{px}}\right) \times 100 = 5 \text{vh}
\]

### 4. **Pixels to `vw`**
`vw` units represent a percentage of the viewport width. To convert `px` to `vw`, use the formula:

\[
\text{value in vw} = \left(\frac{\text{value in px}}{\text{viewport width in px}}\right) \times 100
\]

### Example:
If the viewport width is `1200px` and you want to convert `60px` to `vw`:

\[
\text{value in vw} = \left(\frac{60\text{px}}{1200\text{px}}\right) \times 100 = 5 \text{vw}
\]

### 5. **Pixels to Percent**
To convert `px` to a percentage, it typically requires a reference value, like the width or height of a parent element. The formula is similar to that for `vh` and `vw`:

\[
\text{value in \%} = \left(\frac{\text{value in px}}{\text{parent element dimension in px}}\right) \times 100
\]

### Example:
If the width of the parent element is `400px` and you want to convert `100px` to a percentage:

\[
\text{value in \%} = \left(\frac{100\text{px}}{400\text{px}}\right) \times 100 = 25\%
\]

### Summary of Conversion Formulas
- **`px to em`**: \( \frac{\text{px value}}{\text{parent font size in px}} \)
- **`px to rem`**: \( \frac{\text{px value}}{\text{root font size in px}} \)
- **`px to vh`**: \( \left(\frac{\text{px value}}{\text{viewport height in px}}\right) \times 100 \)
- **`px to vw`**: \( \left(\frac{\text{px value}}{\text{viewport width in px}}\right) \times 100 \)
- **`px to %`**: \( \left(\frac{\text{px value}}{\text{parent dimension in px}}\right) \times 100 \)

### Important Considerations
- Always be aware of the context in which you are converting `px` to other units, particularly with `em`, `rem`, and percentages, as they rely on specific reference values (font sizes or dimensions of parent elements).
- The viewport dimensions can change with window resizing, so these conversions may need to be recalculated dynamically if your layout is responsive.
