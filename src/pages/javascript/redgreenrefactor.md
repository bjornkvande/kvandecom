# Red, Green, Refactor - Write a test, then the code, then clean up.

When implementing a new feature or a new function with some complexity
you first want to write a test or set of tests that checks the expected behavior prior to implementing the function.

This test will then fail (red).

Then you write a quick and dirty solution that make the tests pass (green).

When you are confident you have all the tests you need and the code is passing, it is time to refactor the code to make it readable and easy to understand (refactor).

<br/>

Based on an JSON object with configuration information, we would like to pick out a set of unique key:label pairs. Here is the test we initially wrote.

<br/>

```javascript
it("should return the correct key:label entries", () => {
  const config = {
    activities: ["trail", "xcountry", "road"],
    trail: {
      conditions: {
        items: [
          { value: "dry", label: "Dry" },
          { value: "moist", label: "Moist" },
          { value: "wet", label: "Wet" },
        ],
      },
    },
    xcountry: {
      conditions: {
        items: [
          { value: "dusty", label: "Dusty" },
          { value: "moist", label: "Moist" },
          { value: "ice", label: "Ice" },
        ],
      },
    },
    road: {
      conditions: {
        items: [
          { value: "muchtraffic", label: "Much traffic" },
          { value: "littletraffic", label: "Little traffic" },
          { value: "ice", label: "Ice" },
        ],
      },
    },
  }

  expect(createConditionLabels(config)).toEqual({
    dry: "Dry",
    moist: "Moist",
    wet: "Wet",
    dusty: "Dusty",
    ice: "Ice",
    muchtraffic: "Much traffic",
    littletraffic: "Little traffic",
  })
})
```

<br/>
Here is the inital function we wrote that makes the test pass.

```javascript
export function createConditionLabels(config = {}) {
  const { activities = [] } = config
  const labels = {}
  activities.forEach(activity => {
    if (isNonEmptyArray(config[activity]?.conditions?.items)) {
      const { items } = config[activity]?.conditions
      items.forEach(item => {
        if (labels[item.value] == null) {
          labels[item.value] = item.label
        }
      })
    }
  })
  return labels
}
```

```powershell
Test Suites: 1 passed, 1 total
Tests: 12 passed, 12 total
Snapshots: 0 total
Time: 0.477 s, estimated 1 s
```

<br/>

Here is a slight revision, shortening the function, but still satisfying the test.

```javascript
export function createConditionLabels(config = {}) {
  const { activities = [] } = config
  const labels = {}
  activities.forEach(activity => {
    const { items = [] } = config[activity]?.conditions || {}
    items.forEach(item => (labels[item.value] = item.label))
  })
  return labels
}
```
