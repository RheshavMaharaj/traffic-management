export default function Reducer(congestions, action) {
  switch (action.type) {
    case 'ADD_CONGESTION':
      // congestions = action.payload.data
      return action.payload.data

    case 'DISMISS':
      return congestions.filter(
        (congestion) => congestion.id !== action.payload.id
      )

    case 'SAVED':
      const aa = congestions.map((congestion) => {
        if (congestion.id === action.payload.id) {
          return { ...congestion, isSaved: !congestion.isSaved }
        }

        return congestion
      })
      return aa

    default:
      return congestions
  }
}
