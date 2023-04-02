export const resolveModule = (module: string) => {
  return require.resolve(module)
}

export default resolveModule
