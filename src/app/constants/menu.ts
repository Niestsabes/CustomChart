import { MenuItemInterface } from '../models/menu-item.interface';

export const MAIN_MENU : Array<MenuItemInterface> = [
  { label: 'Accueil', icon: 'icon-home', route: 'home' },
  { label: 'Guide', icon: 'icon-book', route: 'guide' },
  { label: 'Charger les données', icon: 'icon-upload', route: 'load' },
  { label: 'Gérer les données', icon: 'icon-table',
    children: [
      { icon: 'icon-angle-double-right', label: 'Attributs', route: 'data/attributes' },
      { icon: 'icon-angle-double-right', label: 'Données brutes', route: 'data/row' }
    ]
  },
  {
    label: 'Analyse statistique',
    icon: 'icon-chart-pie',
    children: [
      { icon: 'icon-angle-double-right', label: 'Description générale', route: 'statistic-analysis/general' },
      { icon: 'icon-angle-double-right', label: 'Analyse univariée' },
      { icon: 'icon-angle-double-right', label: 'Analyse bivariée' }
    ]
  }
];