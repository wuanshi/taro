const cameraRoll = {
  saveToCameraRoll (filePath, type) {
    const path = type === 'photo' ? `photo://${filePath}` : `video://${filePath}`
    return new Promise((resolve) => {
      resolve(path)
    })
  },
  getImageInfo () {
    const info = {}
    return new Promise((resolve) => {
      resolve(info)
    })
  }
}

export default cameraRoll
