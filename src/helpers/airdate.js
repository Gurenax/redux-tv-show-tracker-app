import moment from 'moment'

export const colorizeAirdate = dateStr => {
  return moment.utc(dateStr) < moment.utc() ? 'episodeAired' : 'episodeNotAired'
}

export const formatAirdate = dateStr => {
  const airdate = moment.utc(dateStr)
  return airdate < moment.utc()
    ? 'Aired: ' + airdate.format('LL')
    : 'To air: ' + airdate.format('LL')
}
