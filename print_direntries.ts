import { walk, walkSync, type WalkEntry } from "$std/fs/mod.ts"

/**
 * Prints names of directories in pth
 * @param pth path of directory to read.
 */
export async function printDirs(pth: string): Promise<any> {
  for await (const item of Deno.readDir(pth)) {
     if (item.isDirectory) {
      console.log(item.name)
    } 
    //item.isDirectory ? console.log(item.name) ? null // FIXME
  }
}

export const printDirsSync = (pth: string): void => {
  for (const item of Deno.readDirSync(pth)) {
    if (item.isDirectory) {
      console.log(item.name)
    }
  }
}

if (import.meta.main) {
  await printDirs("C:/Users/Carl")
}