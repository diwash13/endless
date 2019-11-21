// sort data based on steps number
export function sortComparatorOnSteps(a, b) {
  return Number(a.stepNumber - b.stepNumber);
}

// sort data based on effective date
export function sortComparatorEffectiveDate(a, b) {
  return new Date(a.effectiveDate) - new Date(b.effectiveDate);
}
