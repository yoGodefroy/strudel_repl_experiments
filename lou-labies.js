// @title lou'labies @by M0NK

/**
 * Inspired by koshi's carillons for the pleasure of my baby girl Lou <3
 *
 * Terra  C majeur
 * G C E F G C E G
 *
 * Aqua D mineur (pentatonique)
 * A D F G A D F A 
 *
 * Aria A mineur
 * A C E A B C E B
 *
 * Ignis G majeur (pentatonique)
 * G B D G B D G A 
 */

let carillon = {
  terra: {
    notes: "[4 | 7 | 9 | 10 | 11 | 14 | 16 | 18]*8",
    scale: "C:major"
  },
  aqua: {
    notes: "[4 | 7 | 9 | 10 | 11 | 14 | 16 | 18]*8",
    scale: "D:minor:pentatonic"
  },
  aria: {
    notes: "[0 | 2 | 4 | 7 | 9 | 11 | 14 | 15]*16",
    scale: "A:minor"
  },
  ignis: {
    notes: "[0 | 2 | 4 | 6 | 7 | 8 | 10 | 11]*11",
    scale: "G3:major:pentatonic"
  }
}
first: 
  n(carillon.ignis.notes)
  .scale(carillon.ignis.scale)
    .transpose(-3)
  .struct("x(9,14)")
  .clip("2")
    .attack(.2)
  .sound("gm_kalimba")
  .slow(2)
  .gain(.8).hush(
  )

second: 
n(carillon.terra.notes)
  .scale(carillon.terra.scale)
  .struct("[x(7, 13)|x(9,11)]")
  .clip("6|8|4")
  .attack("[0.08|0.3|0]*8")
  .sound("gm_music_box")
  .slow(1.7)
  .gain(.8)
.pitchwheel(0.2,0.8)
