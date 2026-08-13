import {
  Award,
  Truck,
  Users,
  ShieldCheck,
  Home,
  Building,
  Building2,
  Trash2,
  Package,
  Warehouse,
  Armchair,
  BadgeDollarSign,
  Clock,
  Recycle,
  DollarSign,
  Calendar,
  User,
  MapPin,
  Leaf,
  KeyRound,
  type LucideIcon,
} from "lucide-react";

// Central icon-name -> component registry, so data files can reference an
// icon by a plain string key (serializable, easy to eyeball in content
// files) instead of importing JSX directly.
export const icons = {
  award: Award,
  truck: Truck,
  users: Users,
  shield: ShieldCheck,
  home: Home,
  apartment: Building,
  building: Building2,
  trash: Trash2,
  package: Package,
  warehouse: Warehouse,
  armchair: Armchair,
  "badge-dollar": BadgeDollarSign,
  clock: Clock,
  recycle: Recycle,
  dollar: DollarSign,
  calendar: Calendar,
  user: User,
  "map-pin": MapPin,
  leaf: Leaf,
  key: KeyRound,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof icons;
