var assert = {
  isTrue: function(assertion) {
    if(!assertion) {
      throw new Error("Assertion failed: " + assertion + "is not truthy");
    } else {
      console.log("Assertion passed: " + assertion)
    }
  }
};