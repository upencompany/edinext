import type { FamilyId, Solution } from "../types";
import nola from "./nola";
import nol from "./nol";
import clicspesal from "./clicspesal";
import sian from "./sian";
import vetb from "./vetb";
import vetc from "./vetc";
import avr from "./avr";
import clicvaccino from "./clicvaccino";
import spuv from "./spuv";
import smart from "./smart";
import struttureSanitarie from "./strutture-sanitarie";
import luna from "./luna";
import consultorio from "./consultorio";
import sps from "./sps";
import caSa from "./ca-sa";
import geco from "./geco";
import reteAvis from "./rete-avis";

/**
 * The Edinext application catalogue, as published on edinext.it/soluzioni.
 * One file per application; the order below is the order on the site.
 */
export const solutions: Solution[] = [
  nola,
  nol,
  clicspesal,
  sian,
  vetb,
  vetc,
  avr,
  clicvaccino,
  spuv,
  smart,
  struttureSanitarie,
  luna,
  consultorio,
  sps,
  caSa,
  geco,
  reteAvis,
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

export function solutionsByFamily(family: FamilyId) {
  return solutions.filter((s) => s.family === family);
}
