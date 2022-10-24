export default function Reducer(congestions: any, action: any) {
  switch (action.type) {
    case 'ADD_CONGESTION':
      // congestions = action.payload.data
      return action.payload.data

    case 'DISMISS':
      return congestions.filter(
        (congestion: any) => congestion.stationKey !== action.payload.id
      )

    case 'SAVED':
      const aa = congestions.map((congestion: any) => {
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
