// import { PureComponent } from 'react';
import "./App.css";
import TodoFeature from "./features/Todo";
import React from "react";
// function App() {
//   return (
//     <div className="App">
//       <TodoFeature/>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    // Supper để gọi hàm khởi tạo của hàm cha React.Component
    super(props);
    // Khai báo state
    this.state = {
      count: 0,
      toggleShow: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    console.log("component did mount");
    // Gọi sau khi component được render lần đầu tiên
    // Thực hiện các công việc khởi tạo, gọi API,...
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did mount");
    // Gọi sau khi component được cập nhật (re-render)
    // Kiểm tra sự thay đổi của props hoặc state trước đó và hiện tại
    // Thực hiện các công việc cần thiết dựa trên sự thay đổi này
  }

  componentWillUnmount() {
    console.log("component will unmount");
    // Gọi trước khi component bị xóa khỏi DOM
    // Hủy các tác vụ, bỏ các eventListener, interval,...
  }
  handleToggle() {
    this.setState({
      toggleShow: !this.state.toggleShow,
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.toggleShow && <TodoFeature />}
        <hr />
        <button onClick={this.handleToggle}>Toggle Show</button>
      </div>
    );
  }
}
export default App;

// Có 3 giai đoạn:
// - Mounting: componentDidMount => chạy duy nhất 1 lần khi component được constructor và render
// - Updating: componentDidUpdate,
// - Unmounting: componentWillUnmount
