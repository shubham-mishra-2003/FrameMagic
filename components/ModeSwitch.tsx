import { useState, useEffect } from 'react';
import { Check, ChevronsUpDown, Moon, Sun } from 'lucide-react';
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useTheme } from 'next-themes';


const ModeSwitch = ({ButtonSize = "w-[90px]", ContentSize = "w-28", hidden = true}) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  const handleThemeChange = (currentValue: string) => {
    if (currentValue === 'system') {
      setTheme('system');
      localStorage.removeItem('theme');
    } else {
      setTheme(currentValue);
      localStorage.setItem('theme', currentValue);
    }
    setOpen(false);
  };

  const modes = [
    { value: 'system', label: 'System' },
    { value: 'dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
  ];

  if (!mounted) return "Loading...";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className={`p-2 md:p-3 rounded-full ${ButtonSize} ${resolvedTheme === 'dark' ? 'bg-slate-900 hover:bg-slate-800 border-slate-400' : 'bg-slate-200 border-slate-400 text-slate-900 shadow-inner hover:shadow-slate-400 hover:bg-slate-300'}`}>
          <div className={`font-bold ${!hidden ? 'hidden' : 'flex'} lg:flex text-[13px] items-center w-full justify-between`}>
            {modes.find((mode) => mode.value === theme)?.label}
            <ChevronsUpDown className='w-4' />
          </div>
          <div className={`${hidden ? 'hidden' : 'block'}`}>
            {resolvedTheme == "dark" ? <Moon /> : <Sun />}
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className={`${ContentSize} p-0 ${resolvedTheme === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'}`}>
        <Command>
          <CommandList>
            <CommandGroup>
              {modes.map((mode) => (
                <CommandItem
                  key={mode.value}
                  value={mode.value}
                  onSelect={() => handleThemeChange(mode.value)}
                  className={`${resolvedTheme === 'dark' ? 'hover:bg-slate-700 hover:shadow-black' : 'hover:bg-gray-300 hover:shadow-slate-400'} hover:shadow-inner rounded-md font-semibold cursor-pointer lg:gap-5 flex w-full`}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${theme === mode.value ? 'opacity-100' : 'opacity-0'}`}
                  />
                  {mode.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ModeSwitch;