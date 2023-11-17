import { resolve } from "$std/path/resolve.ts";
import { fromFileUrl } from "https://deno.land/std@0.206.0/path/from_file_url.ts";
import * as urlStd from "$std/url/mod.ts"
import * as denoCrypto from "$std/crypto/mod.ts"
//import urljs from "npm:url-js"

/** Get full current working directory
 * Alternative to using `Deno.cwd()`
 * @returns full path pointing to cwd.
 */
export const fullCwd = (): string | URL => resolve(".")

/** Returns result of import.meta.resolve called on curdir ("./") */
export const fullCwdUrl = (): string | URL => import.meta.resolve("./")


if (import.meta.main) {
  console.log(urlStd)
  console.group(denoCrypto)
  console.log("fullCwd:", fullCwd())
  console.group("fullCwdUrl", fullCwdUrl())
}