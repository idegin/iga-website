import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChartLine,
  Check,
  ChevronDown,
  Clock,
  Compass,
  Handshake,
  HandCoins,
  Landmark,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  Quote,
  ScrollText,
  Search,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

export const SERVICE_ICONS = {
  "property-investment-advisory": Compass,
  "residential-property-development": Building2,
  "property-acquisition-consulting": ScrollText,
  "investment-planning": ChartLine,
  "market-research": Search,
  "strategic-partnerships": Handshake,
} as const;

export const VALUE_ICONS = {
  integrity: ShieldCheck,
  innovation: Lightbulb,
  affordability: HandCoins,
  team: Users,
  sustainability: Leaf,
  community: Landmark,
  growth: TrendingUp,
} as const;

export const CONTACT_ICONS = {
  phone: Phone,
  email: Mail,
  address: MapPin,
  hours: Clock,
  whatsapp: MessageCircle,
} as const;

export const UI_ICONS = {
  arrow: ArrowRight,
  arrowDiagonal: ArrowUpRight,
  expand: Plus,
  collapse: Minus,
  chevron: ChevronDown,
  menu: Menu,
  close: X,
  check: Check,
  quote: Quote,
  star: Star,
} as const;
