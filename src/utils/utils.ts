const exception = [11, 12, 13, 14];
const nominativePlural = [2, 3, 4];
const genetivePlural = [5, 6, 7, 8, 9, 0];

export const declineBathroom = bathRoomCount => {
  if (exception.includes(bathRoomCount)) return 'Санузлов';

  const ending = bathRoomCount % 10;

  if (ending === 1) return 'Санузел';
  if (nominativePlural.includes(ending)) return 'Санузла';
  if (genetivePlural.includes(ending)) return 'Санузлов';
};

export const declineRoom = roomCount => {
  if (exception.includes(roomCount)) return 'Комнат';

  const ending = roomCount % 10;

  if (ending === 1) return 'Комната';
  if (nominativePlural.includes(ending)) return 'Комнаты';
  if (genetivePlural.includes(ending)) return 'Комнат';
};

export const declineChosenRoom = roomCount => {
  if (exception.includes(roomCount)) return 'комнат';

  const ending = roomCount % 10;

  if (ending === 1) return 'комнаты';
  if (nominativePlural.includes(ending)) return 'комнат';
  if (genetivePlural.includes(ending)) return 'комнат';
};

export const declineChosenBathroom = bathRoomCount => {
  if (exception.includes(bathRoomCount)) return 'санузлов';

  const ending = bathRoomCount % 10;

  if (ending === 1) return 'санузла';
  if (nominativePlural.includes(ending)) return 'санузлов';
  if (genetivePlural.includes(ending)) return 'санузлов';
};
