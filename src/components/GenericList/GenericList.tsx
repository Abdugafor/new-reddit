import React from 'react';
import styles from './genericlist.css';

interface IItem {
  text: string,
  id: string
  onClick: (id: string) => void
  className?: string
  As?: 'a' | 'li' | 'button' |  'div'
  href?: string
}

interface IGenericListProps {
  list: IItem[]
}

export function GenericList({list}: IGenericListProps) {
  return (
<<<<<<< HEAD
    <ul>
      {list.map((item) => (
        <li onClick={item.onClick} key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
}    

=======
    <>
      {list.map(({As = 'div', text, onClick, className, id, href}) => {
        <As 
          className={className}
          onClick={(() => onClick(id))}
          key={id}
          href={href}
        />
      })}
    </>
  )
}
>>>>>>> 3cb9a55c52f942d14cc14c2abae79d2848d6b2c5
