const path = require("path")

const getPackagePath = (
  packageName: string,
  modulesPath = "./node_modules"
) => {
  const packagePath = path.resolve(__dirname, `${modulesPath}/${packageName}`)
  return packagePath
}

export default getPackagePath
