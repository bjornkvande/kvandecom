# Fail early

Instead of accepting bad input and handling it, you should fail and throw
an exception to force the fault up to the surface. If the bad input is
accepted, the error might not be found for a long time.

<br/>

The function below is trying to be a good guy and handle bad input. You might
think this is robust, but it is not a good strategy as you will "swollow"
errors from the higher ups.

<br/>

```javascript
export function isDateInTheFuture(timeStamp) {
  if (timeStamp != null) {
    return timeStamp > Date.now()
  } else {
    return false
  }
}
```

<br/>
Instead you should be strict and angry and accept no crap. Let the caller know they are misbehaving by throwing an exception.

```javascript
export function isDateInTheFuture(timeStamp) {
  assert(isNumber(timeStamp), "Invalid timeStamp")
  return timeStamp > Date.now()
}
```
