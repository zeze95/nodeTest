import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

  input creatBoardInput {
    writer: String
    title: String
    contents: String
  }
  # 보내주는건 type 받는건 input
  type Query {
    # fetchBoards: BoardReturn =>객체 1개를 의미함
    fetchBoards: [BoardReturn] # => 배열안에 객체 1개 이상을 의미
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String # 마지막 스트링은 리턴의 타입값 [BoardReturn] 같은게 올수도 있음
    createBoard(writer: String, title: String, contents: String): String # 마지막 스트링은 리턴의 타입값 [BoardReturn] 같은게 올수도 있음
    createBoard2(creatBoardInput: creatBoardInput): String # creaBoardInput가 위나 아래나 동일 의미가 됨
  }
`;

const resolvers = {
  Query: {
    fetchBoards: () => {
      // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
      const result = [
        {
          number: 1,
          writer: "철수",
          title: "제목입니다~~",
          contents: "내용이에요@@@",
        },
        {
          number: 2,
          writer: "영희",
          title: "영희 제목입니다~~",
          contents: "영희 내용이에요@@@",
        },
        {
          number: 3,
          writer: "훈이",
          title: "훈이 제목입니다~~",
          contents: "훈이 내용이에요@@@",
        },
      ];

      return result;
      // res.send(result) 와 동일의미
      // 2. 꺼내온 결과 응답 주기
    },
  },
  Mutation: {
    createBoard: (_, args) => {
      // createBoard: (parent, args, context, info) => { 지금 쓰이지 않는 것들
      //  parent를 현재 쓰지 않기에 언더바로 표기만 해둠.
      // args 우리가 받는 것이 들어오는 부분
      // context req,res 에 대한 정보
      // info는 api의 정보
      // args.writer args.title args.contents이렇게 정보 사용
      //프론트에서 정보를 보냈을때 받는 방법 차후에는 다른 api에서 api로 정보를 받는 것이 가능함
      // parent로 프론트에서 보낸 정보가 보내지는 곳
      // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
      console.log(args); // args의 정보 보기

      // 2. 저장 결과 응답 주기
      return "리턴이여요";
    },
    createBoard2: (_, args) => {
      console.log(args);
      return "전송 성공";
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`server ready at ${url} on port ${3001}`);
});
