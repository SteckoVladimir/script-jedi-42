// Playing with Sets : Equal or Not ?	https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2){
  const a = new Set(s1);
  const b = new Set(s2);
  if ( a === b || a.size === b.size) return a,b;
  
}

function notEqual(s1, s2){
  const c = new Set(s1);
  const d = new Set(s2);
  if ( c.size !==d.size || c !== d) return c,d;
}
