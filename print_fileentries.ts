/**
 * Prints names of files in pth asynchronously.
 * @param pth path of directory to read.
 */
export async function printFiles(pth: string): Promise<any> {
  for await (const item of Deno.readDir(pth)) {
     if (item.isFile) {
      console.log(item.name)
    } 
    //item.isDirectory ? console.log(item.name) ? null // FIXME
  }
}

/**
 * Print names of files in pth.
 * @param pth 
 */
export const printFilesSync = (pth: string): void => {
  for (const item of Deno.readDirSync(pth)) {
    if (item.isFile) {
      console.log(item.name)
    }
  }
}

if (import.meta.main) {
  await printFiles("C:/Users/Carl")
}