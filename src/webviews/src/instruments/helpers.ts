export const noteUrls = (notes: string[]) => {
  let out = {}

  notes.forEach(note => {
    out[note] = `${note}.mp3`
  })

  return out
}
