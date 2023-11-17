import { walk, walkSync, type WalkOptions, type WalkEntry } from "https://deno.land/std@0.206.0/fs/walk.ts";
import { resolve } from "$std/path/resolve.ts";
import type { ParsedPath } from "https://deno.land/std@0.206.0/path/mod.ts";

/**
 * Print full pathnames for each item returned by the std/fs/walk.ts function
 * @remarks `walk()` accepts a WalkOptions object which allows you to query for which type 
 * of file to return.
 * By default, `walk()` recurses into dirs, so we set thr `maxDepth` option to 1.
 * @param pth 
 */
export async function printFilePaths (pth: string /* | URL */): Promise<void> {
  // FIXME: Make this function print the full path, right down to the root.
  for await (const i of walk(pth, {
    maxDepth: 1,
    includeDirs: false,
    includeFiles: true,
    includeSymlinks: false
  })) {
    console.log(i.path)
  }
}

/** Synchronous version of printFilePaths
 * @see printFilePaths
 * @param pth 
 */
export function printFilePathsSync (pth: string): void {
  for (const i of walkSync(pth, {maxDepth: 1})) {
    if (i.isFile) console.log(i.path)
  }
}