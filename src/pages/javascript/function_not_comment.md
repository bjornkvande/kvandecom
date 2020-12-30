```javascript
export function byTrailFilter(filter) {
  assertObject(filter, 'Invalid filter object ' + filter);
  const fuzzy = multiStringMatch(filter.search);
  return trail => {
    const match = matchTrailFilter(trail, filter);
    return match && filter.search ? fuzzy(trail) : match;
  };
}
```
