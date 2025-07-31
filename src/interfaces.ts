export interface LayoutProp {
  children: React.ReactNode;
  toggleTheme: () => void;
  theme: string;
};

export interface MainNavProps{
    onToggleTheme: () => void; 
    theme: string
}
