export function generateClampValues(value, minScreenWidth, maxScreenWidth, unit) {
    /** If it's a flat value and not an array, it shouldn't be scaled. */
    if (typeof value === "number") {
        return `${value}${unit}`;
    }
    /** If it's array, it needs to be scaled between two values. */
    /** Users can pass [50px] instead of 50px by mistake when removing one of the values. Treat this the same. */
    if (value.length === 1) {
        return `${value}${unit}`;
    }
    /** Don't try to scale between more than 2 values. */
    if (value.length !== 2) {
        return null;
    }
    let [minValue, maxValue] = value;
    // If user passes numbers in wrong order, swap them. Usually happens with negative tracking.
    if (minValue > maxValue) {
        [minValue, maxValue] = [maxValue, minValue];
    }
    let minValueWithUnit = `${minValue}${unit}`;
    let maxValueWithUnit = `${maxValue}${unit}`;
    return `clamp(${minValueWithUnit}, calc(${minValueWithUnit} + (${maxValue} - ${minValue}) * ((100vw - ${minScreenWidth}${unit}) / (${maxScreenWidth} - ${minScreenWidth}))), ${maxValueWithUnit})`;
}
