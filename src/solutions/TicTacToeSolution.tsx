import { useState } from 'react';

const possibleWin = [
  ['11', '12', '13'],
  ['21', '22', '23'],
  ['31', '32', '33'],
  ['11', '21', '31'],
  ['12', '22', '32'],
  ['13', '23', '33'],
  ['11', '22', '33'],
  ['13', '22', '31'],
];

interface BoardState {
  X: string[];
  Y: string[];
}

export default function TicTacToeSolution() {
  const [boardGame, setBoard] = useState<BoardState>({ X: [], Y: [] });
  const [player, setPlayer] = useState<'X' | 'Y'>('X');
  const [winner, setWinner] = useState('');

  const checkWin = (board: BoardState, currentPlayer: string) => {
    const isWin = possibleWin.some((winCords) => {
      return winCords.every((c) => board[currentPlayer as keyof BoardState].includes(c));
    });
    if (isWin) {
      setWinner(currentPlayer);
      return currentPlayer;
    }
    return null;
  };

  const handlePlay = (x: number, y: number) => {
    if (winner) return;
    const cord = `${x}${y}`;
    if (boardGame.X.includes(cord) || boardGame.Y.includes(cord)) return;
    const newBoard = { ...boardGame, [player]: [...boardGame[player], cord] };
    setBoard(newBoard);
    checkWin(newBoard, player);
    setPlayer(player === 'X' ? 'Y' : 'X');
  };

  const resetGame = () => {
    setPlayer('X');
    setBoard({ X: [], Y: [] });
    setWinner('');
  };

  const getValue = (x: number, y: number) => {
    const found = Object.entries(boardGame).find(([_, cords]) =>
      cords.some((c: string) => c === `${x}${y}`)
    );
    return found ? found[0] : '';
  };

  const cellStyle: React.CSSProperties = {
    width: 64,
    height: 64,
    fontSize: 24,
    fontWeight: 700,
    cursor: 'pointer',
    border: '1px solid #475569',
    borderRadius: 8,
    background: '#1e293b',
    color: '#e2e8f0',
    transition: 'all 0.15s',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ color: '#94a3b8', marginBottom: 16, fontSize: 14 }}>
        Current player: <strong style={{ color: player === 'X' ? '#60a5fa' : '#f472b6', fontSize: 18 }}>{player}</strong>
      </p>
      {[1, 2, 3].map((row) => (
        <div key={row} style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 6 }}>
          {[1, 2, 3].map((col) => (
            <button
              key={col}
              onClick={() => handlePlay(row, col)}
              style={{
                ...cellStyle,
                color: getValue(row, col) === 'X' ? '#60a5fa' : '#f472b6',
              }}
            >
              {getValue(row, col)}
            </button>
          ))}
        </div>
      ))}
      {winner && (
        <div style={{ marginTop: 20 }}>
          <strong style={{ color: '#34d399', fontSize: 18 }}>🎉 Winner: {winner}</strong>
          <br />
          <button
            onClick={resetGame}
            style={{
              marginTop: 12,
              padding: '8px 24px',
              borderRadius: 8,
              border: '1px solid #475569',
              background: '#334155',
              color: '#e2e8f0',
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            Reset Game
          </button>
        </div>
      )}
    </div>
  );
}
