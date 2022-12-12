매우매우 중요한 거

File : src > App.js


setToDos((currentArray) => [toDo, ...currentArray]);
toDo의 내용이 []에 추가 되고 난후에는 currentArray로 임지 저장 그 후 ToDos에 저장
그리고 다음 내용이 들어오면 저장된 currentArray + ToDo 내용 이런식으로 쌓이는 방식
일반 JS array.push랑 비슷함

![매모](https://media.discordapp.net/attachments/1050314486034219032/1051854884334473316/4B9vsyI.png)
