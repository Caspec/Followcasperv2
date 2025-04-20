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
    description: 'This is my second game of guess the number',
    slug: 'guess-the-number',
    imageHero: 'image2.jpg',
    tags: ['Guess', 'Game'],
  },
  {
    id: 3,
    title: 'Monopoly: First Step',
    date: '2025-04-20',
    description: 'A round-board twist on the classic Monopoly game!',
    slug: 'monopoly',
    imageHero: 'monopoly.jpg',
    tags: ['Monopoly', 'Game'],
  },
];
