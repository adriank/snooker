#!/bin/bash
bold=$(tput bold)
normal=$(tput sgr0)

if [ -z "$1" ]; then
  echo "Reducer name has to be defined!";
  exit;
fi

if [ "$1" == "-h" ]; then
  echo "Enter underscore separated name";
  exit;
fi

type=`node -e "console.log('$1'.toUpperCase())"`
actionName=`node -e "console.log('$1'.split('_').map((s, n) => n > 0 ? s[0].toUpperCase() + s.slice(1).toLowerCase() : s.toLowerCase()).join(''))"`

echo ">> ${bold}./src/actions/types.js${normal}
export const $type = '$type'
>> ${bold}./src/actions/actions.js${normal}
export function $actionName(value) {
  return {
    type: types.$type,
    value
  }
}
>> ${bold}./src/reducers/index.js (or in other file)${normal}
export function $actionName(state, value) {
  return state.set('value', value)
}
>> ${bold}./src/reducers/index.js (or in other file)${normal}
case types.$type:
  return $actionName(state, action.value)
"
