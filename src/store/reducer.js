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
  if(data){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = data.list
    newState.iptValue = data.iptValue
    return newState
  }
  return state
}