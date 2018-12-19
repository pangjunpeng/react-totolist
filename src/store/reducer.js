const defaultStore = {
  iptValue: '',
  list: [
    1,
    2,
    3
  ]
}
export default (state = defaultStore, action) => {
  let { type, data } = action
  if(type === 'input_change'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.iptValue = data.iptValue
    return newState
  }
  if(type === 'list_add'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = data.list
    newState.iptValue = data.iptValue
    return newState
  }
  if(type === 'list_del'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = data.list
    newState.iptValue = data.iptValue
    return newState
  }
  return state
}