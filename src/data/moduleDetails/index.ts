import { module1Detail } from './module1';
import { module2Detail } from './module2';
import { module3Detail } from './module3';
import { module4Detail } from './module4';
import { module5Detail } from './module5';
import { module6Detail } from './module6';
import { module7Detail } from './module7';
import { module8Detail } from './module8';
import { module9Detail } from './module9';
import { module10Detail } from './module10';
import { module11Detail } from './module11';
import { module12Detail } from './module12';
import { module13Detail } from './module13';
import { module14Detail } from './module14';
import { module15Detail } from './module15';
import { module16Detail } from './module16';
import { module17Detail } from './module17';
import { module18Detail } from './module18';
import { module19Detail } from './module19';
import { ModuleDetailContent } from './types';

export const moduleDetails: Record<number, ModuleDetailContent> = {
  1: module1Detail,
  2: module2Detail,
  3: module3Detail,
  4: module4Detail,
  5: module5Detail,
  6: module6Detail,
  7: module7Detail,
  8: module8Detail,
  9: module9Detail,
  10: module10Detail,
  11: module11Detail,
  12: module12Detail,
  13: module13Detail,
  14: module14Detail,
  15: module15Detail,
  16: module16Detail,
  17: module17Detail,
  18: module18Detail,
  19: module19Detail,
};

export function getModuleDetail(id: number): ModuleDetailContent | undefined {
  return moduleDetails[id];
}

export * from './types';
