

export const BATTLESHIP_SELECT = 'BATTLESHIP_SELECT'
export const battleshipSelect =() => ({
    type: BATTLESHIP_SELECT
})

export const GROUP_COORDINATES = 'GROUP_COORDINATES'
export const groupCoordinates = (coordinates) => ({
    type: GROUP_COORDINATES,
    coordinates
})