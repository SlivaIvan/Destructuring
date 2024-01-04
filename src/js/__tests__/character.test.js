import extractSpecialAttacks from '../character';

describe('extractSpecialAttacks function', () => {
  test('should extract special attacks with description', () => {
    const character = {
      special: [
        {
          id: 1, name: 'Attack1', description: 'Desc1', icon: 'http://...',
        },
        {
          id: 2, name: 'Attack2', description: 'Desc2', icon: 'http://...',
        },
      ],
    };

    const result = extractSpecialAttacks(character);

    expect(result).toEqual([
      {
        id: 1, name: 'Attack1', description: 'Desc1', icon: 'http://...',
      },
      {
        id: 2, name: 'Attack2', description: 'Desc2', icon: 'http://...',
      },
    ]);
  });

  test('should set default description for attacks without description', () => {
    const character = {
      special: [
        { id: 1, name: 'Attack1', icon: 'http://...' },
        { id: 2, name: 'Attack2', icon: 'http://...' },
      ],
    };

    const result = extractSpecialAttacks(character);

    expect(result).toEqual([
      {
        id: 1, name: 'Attack1', description: 'Описание недоступно', icon: 'http://...',
      },
      {
        id: 2, name: 'Attack2', description: 'Описание недоступно', icon: 'http://...',
      },
    ]);
  });

  test('should handle empty special attacks array', () => {
    const character = { special: [] };

    const result = extractSpecialAttacks(character);

    expect(result).toEqual([]);
  });
});
