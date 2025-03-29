export type Games = {
  id: number;
  title: string;
  date: string;
  description: string;
  slug: string;
  imageHero: string;
  images?: string[];
  tags?: string[];
};

export const games: Games[] = [
  {
    id: 1,
    title: 'Tic Tac Toe',
    date: '2025-03-29',
    description: 'This is my first game of tic tac toe',
    slug: 'tic-tac-toe',
    imageHero: 'image1.jpg',
    tags: ['TicTacToe', 'Game'],
  },
  {
    id: 2,
    title: 'Guess the Number',
    date: '2025-03-21',
    description: 'This is my first game',
    slug: 'my-second-game',
    imageHero: 'image2.jpg',
    tags: ['Guess', 'Game'],
  },
  {
    id: 3,
    title: 'Space Invaders',
    date: '2025-03-23',
    description: 'This is my third game',
    slug: 'my-third-game',
    imageHero: 'image3.jpg',
    tags: ['Space', 'Game'],
  },
];
