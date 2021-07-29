export const active = {}

export function addMarker (marker) {
  active[marker.id] = marker
  return marker
}

export function deleteMarker (id) {
  delete active[id]
}

export function updateMarker (marker) {
  active[marker.id] = marker
}
