---
title: 'Mastering gRPC: The Ultimate Guide'
excerpt: 'An Introduction to gRPC: Efficient Communication for Modern Applications'
date: '2023-10-16'
author: "Halil Toksöz"
readTime: "5 min read"
imageUrl: "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
avatarUrl: "https://media.licdn.com/dms/image/D4D03AQG4jP60k0Y62A/profile-displayphoto-shrink_200_200/0/1694692187681?e=2147483647&v=beta&t=5XFOWym93mWsqvkMy884ThqMuDWVlxLb3JeeGDqQgoM"
---

# Mastering gRPC: The Ultimate Guide
## Introduction

In the current age of software development, choosing the right communication protocol can significantly impact the performance, scalability, and maintainability of applications. Enter gRPC, a modern communication protocol that stands out due to its efficiency and versatility. This guide dives deep into gRPC, contrasting it with the likes of REST and GraphQL, and offers an in-depth understanding of its inner workings and benefits. 

In this blog post, we'll delve into the nuts and bolts of gRPC and Protocol Buffer, including how they work and the methods and techniques they use. We'll also explore the differences between HTTP 1.1 and HTTP 2, gRPC communication types and core principles, as well as the pros and cons of gRPC. Furthermore, we'll compare gRPC's performance with REST and GraphQL and discuss when it's a better option than REST or GraphQL. Finally, we'll provide a step-by-step tutorial on how to create a Nest.js gRPC client with a gRPC server using .NET Core, so you can get started with gRPC today!

## What is gRPC?

![Untitled](Mastering%20gRPC%20The%20Ultimate%20Guide%20e0fc3bf9b6724863b8999a436cea799a/Untitled.png)

**Remote Procedure Call (RPC)** is a **client-server communication protocol** that enables one program to request a service from another program on a network without requiring knowledge of the network's underlying details. RPC is frequently used to implement microservices architectures, which enable multiple requests to be performed concurrently using lightweight processes or threads that share the same address space.

A procedure call, also known as a function call or subroutine call, is a **synchronous operation** that requires the requesting program to be **suspended until the results** of the remote procedure are returned. The **Interface Definition Language (IDL)** is commonly used in RPC software to specify a software component's application programming interface (API). **IDL acts as a bridge** between machines at either end of the link that may be using different operating systems and computer languages, allowing them to communicate effectively.

![Untitled](Mastering%20gRPC%20The%20Ultimate%20Guide%20e0fc3bf9b6724863b8999a436cea799a/Untitled%201.png)

**gRPC**, which stands for Google Remote Procedure Call, is an open-source high-performance framework that enables efficient communication between services. It was initially developed by Google and is now being used and supported by a growing number of organizations.

## **Protocol Buffers**

A standout feature of gRPC is its use of Protocol Buffers (protobuf) – a binary serialization format. Unlike JSON or XML which are used in REST, protobufs are more compact and faster to parse, resulting in smaller payloads and quicker transmission times.

## **How does gRPC work?**

![                                        [EP32: REST vs. GraphQL - by Alex Xu - ByteByteGo Newsletter](https://blog.bytebytego.com/p/ep32-how-does-grpc-work)](Mastering%20gRPC%20The%20Ultimate%20Guide%20e0fc3bf9b6724863b8999a436cea799a/Untitled%202.png)

                                        [EP32: REST vs. GraphQL - by Alex Xu - ByteByteGo Newsletter](https://blog.bytebytego.com/p/ep32-how-does-grpc-work)

gRPC uses HTTP/2 to transmit data between clients and servers. HTTP/2 is a binary protocol that is more efficient than HTTP/1.1.

**gRPC uses Protocol Buffers to serialize data.** Protocol Buffers are a compact and efficient way to serialize data.

**gRPC uses a client-server architecture.** The client sends requests to the server, and the server sends responses to the client.

![                                                                              [g](https://medium.com/deliveryherotechhub/grpc-nedir-ve-nas%C4%B1l-uygulan%C4%B1r-microservice-mimarisi-ile-grpc-9f1dc0847475)RPC Workflow](Mastering%20gRPC%20The%20Ultimate%20Guide%20e0fc3bf9b6724863b8999a436cea799a/Untitled%203.png)

                                                                              [g](https://medium.com/deliveryherotechhub/grpc-nedir-ve-nas%C4%B1l-uygulan%C4%B1r-microservice-mimarisi-ile-grpc-9f1dc0847475)RPC Workflow

## **gRPC lifecycle and workflow**

![Untitled](Mastering%20gRPC%20The%20Ultimate%20Guide%20e0fc3bf9b6724863b8999a436cea799a/Untitled%204.png)

The gRPC lifecycle and workflow can be summarized as follows:

1. **Client and server initialization:** The client and server initialize the gRPC libraries.
2. **Client-side service discovery:** The client discovers the server's address.
3. **Client-side connection establishment:** The client establishes a connection to the server.
4. **Client-side request serialization:** The client serializes the request data.
5. **Client-side request transmission:** The client sends the request to the server.
6. **Server-side request deserialization:** The server deserializes the request data.
7. **Server-side request processing:** The server processes the request.
8. **Server-side response serialization:** The server serializes the response data.
9. **Server-side response transmission:** The server sends the response to the client.
10. **Client-side response deserialization:** The client deserializes the response data.

## **Basic Principles and Communication Types of gRPC**

**gRPC is based on a few basic principles:**

- **Interface First:** gRPC services are defined in a proto file. This file defines the methods that the service exposes, as well as the data types that are used in those methods.
- **Protocol Buffers:** gRPC uses Protocol Buffers to serialize data. Protocol Buffers are a compact and efficient way to serialize data.
- **HTTP/2:** gRPC uses HTTP/2 to transmit data. HTTP/2 is a binary protocol that is more efficient than HTTP/1.1.

**gRPC supports a variety of communication types, including:**

- **Unary:** A unary RPC is a request-response RPC. The client sends a request to the server, and the server sends a response to the client.

![Untitled](Mastering%20gRPC%20The%20Ultimate%20Guide%20e0fc3bf9b6724863b8999a436cea799a/Untitled%205.png)

- **Streaming:** A streaming RPC is a request-stream or stream-response RPC. The client sends a request to the server, and the server sends a stream of responses to the client.
    - **Client Streaming:** The client streaming feature of gRPC allows clients to send multiple messages to the server in a streaming fashion.
        
        ![Untitled](Mastering%20gRPC%20The%20Ultimate%20Guide%20e0fc3bf9b6724863b8999a436cea799a/Untitled%206.png)
        
    - **Server Streaming:** The server streaming feature of gRPC allows servers to send multiple messages to the client for a single request in a streaming manner.
        
        ![Untitled](Mastering%20gRPC%20The%20Ultimate%20Guide%20e0fc3bf9b6724863b8999a436cea799a/Untitled%207.png)
        
- **Bidirectional streaming:** A bidirectional streaming RPC is a type of RPC where both the client and server can send streams of messages to each other asynchronously.

![Untitled](Mastering%20gRPC%20The%20Ultimate%20Guide%20e0fc3bf9b6724863b8999a436cea799a/Untitled%208.png)

## Core Principles of gRPC

gRPC is built on four core principles:

1. **Protocol Buffers**: gRPC utilizes Protocol Buffers (protobuf) as its interface definition language. Protocol Buffers provide a compact binary format that is more efficient to transmit and faster to parse compared to textual representations.
2. **Strongly-typed Contracts**: gRPC enables you to define the service and message types in a protobuf file. This establishes a strongly-typed contract between the client and server, ensuring seamless communication and easy understanding of the exchanged data by both parties.
3. **Bi-directional Streaming**: gRPC supports bi-directional streaming, allowing both the client and server to send and receive multiple messages over a single connection. This feature is especially useful for real-time communication and scenarios where continuous streams of data need to be exchanged by both parties.
4. **Language-Agnostic**: gRPC is designed to be language-agnostic, meaning it can be used with various programming languages. The gRPC compiler generates client and server code in your preferred language, making it easy to integrate gRPC into your existing systems.

## **Key differences between REST, GraphQL, and gRPC**

REST, GraphQL, and gRPC are all popular ways to implement microservices architectures. However, there are some key differences between the three frameworks.

### **REST**

REST, short for Representational State Transfer, is an architectural style that is commonly used in designing web services. RESTful APIs rely on HTTP methods to specify the actions that need to be taken on resources identified by URIs. As a result, RESTful APIs have become a prevalent and widely accepted method for creating web services.

- **Nature**: Architectural style using HTTP methods for CRUD operations.
- **Data Format**: Typically JSON or XML.
- **Flexibility**: Clients can selectively request data, but may face over-fetching/under-fetching issues.
- **Performance**: Uses either HTTP/1.1 or HTTP/2; generally good but can be inefficient for large data.

### **GraphQL**

GraphQL is a specialized query language created for APIs that provides a great deal of flexibility. It enables clients to request only the data they need from the server, making it an incredibly effective tool for developing adaptable and efficient applications. By utilizing GraphQL APIs, developers can simplify the data retrieval process and significantly improve the performance of their applications.

- **Nature**: A query language allowing clients to request only required data.
- **Data Format**: Typically JSON.
- **Flexibility**: High; clients can dictate exactly what they need.
- **Performance**: Uses HTTP/1.1; adaptable and efficient for diverse data needs.

### **gRPC**

gRPC is a Remote Procedure Call (RPC) framework that allows developers to build distributed systems easily. It utilizes HTTP/2 as a transport layer for fast and reliable data transmission, and Protocol Buffers for efficient data serialization. gRPC offers a range of features, including support for multiple programming languages, bi-directional streaming for real-time communication, flow control for efficient network utilization, and robust error handling for improved reliability. Its ability to create scalable, resilient, and maintainable distributed systems makes it a powerful tool for developers.

- **Nature**: RPC framework focusing on service-to-service communication.
- **Data Format**: Protocol Buffers.
- **Flexibility**: Defined by the service's protobuf file.
- **Performance**: Uses HTTP/2; excels in throughput and latency, especially for large data.

## **Pros and cons of using REST, GraphQL, and gRPC**

### **REST**

| Cons | Pros |
| --- | --- |
| Can be inefficient for large amounts of data, due to the need to transfer the entire resource representation on each request | Simple to understand and implement |
| Can be difficult to version, as changes to the API can require changes to the URI structure | Widely supported by tools and libraries |
| Lack of Real-time Support | Flexible in terms of data representation (JSON, XML) |
| Over-fetching/Under-fetching | Caching |

### **GraphQL**

| Cons | Pros |
| --- | --- |
| More complex to understand and implement than REST | Efficient Data Fetching |
| Not as widely supported by tools and libraries as REST | Flexible in terms of data representation |
|  | Easy to version, as changes to the API do not require changes to the query language |
|  | Strong typing |

### **gRPC**

| Cons | Pros |
| --- | --- |
| Client/Server Compatibility | Bidirectional Streaming |
| More complex to understand and implement than REST | Very efficient for transmitting data, due to the use of HTTP/2 and Protocol Buffers |
| Not as widely supported by tools and libraries as REST | High performance for large amounts of data |
|  | Easy to version, as changes to the API are defined in the proto file |

### **Performance Comparison**

When comparing the performance of REST, GraphQL, and gRPC, several factors come into play, such as payload size, network latency, and the nature of the communication. Generally, gRPC outperforms REST and GraphQL in terms of throughput and latency due to its use of the compact binary format and the HTTP/2 protocol.

When evaluating communication protocols, performance is a paramount consideration. It determines the efficiency of data transfer, the scalability of your system, and the user experience. Let's compare gRPC, REST, and GraphQL from a performance standpoint.

## **1. Data Serialization and Size:**

- **REST**: Typically uses JSON, which is textual and can be verbose for complex structures. This can lead to larger payloads.
- **GraphQL**: Also uses JSON. However, its strength lies in the ability for clients to request precisely what they need, potentially reducing the size of the response.
- **gRPC**: Uses Protocol Buffers, a binary format. It's significantly more compact than JSON, leading to smaller payloads and faster serialization and deserialization.

## **2. Network Protocol Efficiency:**

- **REST**: Can operate over HTTP/1.1 or HTTP/2. While HTTP/2 offers multiplexing and other improvements over its predecessor, REST doesn't exploit all its benefits.
- **GraphQL**: Typically runs over HTTP/1.1 but can also use HTTP/2. Like REST, it doesn't fully leverage HTTP/2's features.
- **gRPC**: Exclusively uses HTTP/2, benefiting from its features like header compression, multiplexing, and prioritization.

## **3. Flexibility vs. Overhead:**

- **REST**: While REST endpoints are fixed, the flexibility comes in the form of creating new endpoints. This can introduce overhead when many endpoints need to be maintained or if there's a need to fetch data from multiple endpoints.
- **GraphQL**: Extremely flexible. Clients can specify exactly what they need in a single request. However, this flexibility can introduce complexity on the server side to resolve and optimize the queries.
- **gRPC**: Has fixed endpoints defined in the protobuf file, but the binary protocol and the ability to stream data efficiently can often outweigh the lack of flexibility in certain scenarios.

## **4. Real-time Data Handling:**

- **REST**: Doesn't natively support real-time data streams.
- **GraphQL**: Real-time capabilities can be achieved using subscriptions, but this requires additional tooling and setup.
- **gRPC**: Natively supports bidirectional streaming, making it a go-to for real-time applications.

## **5. Performance Metrics:**

- **REST**: Good performance for general purposes. However, for applications with heavy data or real-time requirements, it might not be the best choice.
- **GraphQL**: Good performance, especially in scenarios where specific data needs are variable. Over-fetching and under-fetching are minimized.
- **gRPC**: Exceptional performance, particularly for high-throughput applications or services requiring real-time communication.

| Framework | Performance |
| --- | --- |
| REST | Good (HTTP 1.1) |
| GraphQL | Good (HTTP 1.1) |
| gRPC | Excellent (HTTP 2) |

However, it's important to note that the performance of these protocols can vary depending on the specific use case. For example, if you have a simple CRUD (Create, Read, Update, Delete) application, REST might be sufficient. On the other hand, if you have real-time requirements or need to handle large amounts of data, gRPC could be a better choice.

## **Summary of differences: gRPC vs. REST**

|  | gRPC API | REST API |
| --- | --- | --- |
| What is it? | A system to create and use APIs based on the Remote Procedure Call (RPC) client-server communication model. | A set of rules that defines structured data exchange between a client and a server. |
| Design approach | Service-oriented design. The client asks the server to perform a service or function that may or may not impact server resources. | Entity-oriented design. The client asks the server to create, share, or modify resources. |
| Communication model | Multiple options like unary, one server to many clients, one client to many servers, and many clients to many servers. | Unary. A single client communicates with a single server. |
| Implementation | Requires gRPC software on both the client and server-side to operate. | You can implement it on the client and server-side in a wide variety of formats with no common software necessary. |
| Data access | Service (function) calls. | Multiple endpoints in the form of URLs to define resources. |
| Data returned | In the fixed return type of the service as defined in the Protocol Buffer file. | In a fixed structure (typically JSON), defined by the server. |
| Client-server coupling | Tightly coupled. Both client and server need the same Protocol Buffer file that defines the data format. | Loosely coupled. The client and server are not aware of internal details. |
| Automatic code generation | Built-in feature. | Requires third-party tools. |
| Bidirectional streaming | Present. | Not present. |
| Best suited for | High-performance or data-heavy microservice architectures. | Simple data sources where resources are well-defined. |

## Key Differences gRPC By REST and GraphQL

**REST**

REST (Representational State Transfer) is a widely adopted architectural style for designing networked applications. It uses standard HTTP methods like GET, POST, PUT, and DELETE to perform operations on resources identified by URLs (Uniform Resource Locators).

Some key differences between gRPC and REST include:

- **Data Format**: REST typically uses textual representations like JSON or XML to transmit data, while gRPC uses Protocol Buffers, a compact binary format.
- **Communication Protocol**: REST uses HTTP/1.1 or HTTP/2 as the underlying communication protocol, while gRPC exclusively uses HTTP/2.
- **Flexibility**: REST allows clients to selectively request specific fields from a resource, while gRPC requires clients to retrieve the entire message.
- **Strong Typing**: gRPC enforces strong typing through the use of Protocol Buffers, while REST is more flexible and allows for looser data typing.

**GraphQL**

GraphQL is a query language and runtime for APIs that offers a more efficient and flexible alternative to REST. It allows clients to specify the exact data requirements they need, reducing over-fetching and under-fetching of data.

Some key differences between gRPC and GraphQL include:

- **Communication Style**: gRPC uses the remote procedure call (RPC) pattern, where clients invoke methods on the server, while GraphQL uses a query language to request specific data from the server.
- **Data Fetching**: gRPC retrieves entire messages, while GraphQL allows clients to specify the exact fields they need, reducing network overhead.
- **Support for Real-time Data**: gRPC natively supports bidirectional streaming, making it suitable for real-time communication. In contrast, GraphQL requires additional tooling to achieve real-time capabilities.

## **When to use gRPC**

gRPC is a good choice for microservices architectures where performance is critical. gRPC is also a good choice for applications that need to transmit large amounts of data.

**Here are some specific examples of when to use gRPC:**

- **To implement a real-time streaming service**, such as a chat or video streaming service
- **To implement a service that needs to transmit large amounts of data**, such as a file transfer service
- **To implement a service that needs to be very efficient, high-performance systems**, such as a trading system
- **To communicate Language-Agnostic services,** such as microservices developed in different languages or applications using different platforms.

## **Best practices and techniques of gRPC**

Here are some best practices and techniques for gRPC integration, implementation, and development in microservice architectures:

- **Use a service mesh to manage gRPC traffic.** A service mesh can help you to improve the performance, scalability, and reliability of your gRPC services.
- **Use of Deadlines timeout and Cancellation to essential for reliable applications.** This can avoid unnecessary server usage and thread blocking.
- **Use a load balancer to distribute traffic across multiple gRPC servers.** This can help to improve the performance and scalability of your gRPC services.
- **Use a circuit breaker to prevent cascading failures.** A circuit breaker can help to prevent a single failure from taking down your entire system.
- **Use authentication and authorization to secure your gRPC APIs.** This can help to protect your APIs from unauthorized access.
- **Use monitoring and logging to track the performance and health of your gRPC APIs.** This can help you to identify and troubleshoot problems with your APIs.

**Additional tips for implementing gRPC in microservice architectures:**

- **Design your services to be independent and self-contained.** This will make them easier to develop, test, and deploy.
- **Use a consistent naming convention for your services and their methods.** This will make it easier for developers to understand and use your APIs.
- **Use a versioning scheme for your services and their methods.** This will help you to manage changes to your APIs and to ensure that clients are compatible with the latest version of your APIs.
- **Document your APIs thoroughly.** This will help developers to understand how to use your APIs.

## Service Definition and Using gRPC on the Client-side

To define a gRPC service, you need to create a protobuf file that specifies the service and message types. Here's an example of a simple protobuf file:

```protobuf
syntax = "proto3";

package myservice;

service MyService {
  rpc GetData(GetDataRequest) returns (GetDataResponse);
}

message GetDataRequest {
  string id = 1;
}

message GetDataResponse {
  string data = 1;
}

```

In this example, we define a service called `MyService` with a single RPC method called `GetData`. The method takes a `GetDataRequest` message as input and returns a `GetDataResponse` message.

To use this service on the client-side, you need to generate client code using the gRPC compiler for your preferred programming language. Once the client code is generated, you can use it to invoke the RPC methods defined in the protobuf file.

Here's an example of how you can use the generated client code in a .NET Core application:

```csharp
using Grpc.Core;
using MyService;

var channel = new Channel("localhost:50051", ChannelCredentials.Insecure);
var client = new MyServiceClient(channel);

var request = new GetDataRequest { Id = "123" };
var response = client.GetData(request);

Console.WriteLine("Data: " + response.Data);

```

In this example, we create a gRPC channel and client, then send a `GetDataRequest` to the server using the client's `GetData` method. The response is stored in a `GetDataResponse` object, and we can access the data returned by the server.

# Tutorial

## gRPC - File Upload/Download Tutorial

Now, I will explain how to create a gRPC client application using Nest.js and a gRPC server using .NET Core and how to perform file upload (client-streaming), download (server-streaming) and file-path query (unary) operations through these applications.

### 1. gRPC Protocol Creation:

First, we need to create the `file.proto` file that we will use in our service. This file defines the methods and message types of our service.

```protobuf
syntax = "proto3";

package file;
import "google/protobuf/empty.proto"; //such as return "void"

service FileService {
    rpc FileDownLoad (FileInfo) returns (stream BytesContent); //server streaming
    rpc FileUpLoad (stream BytesContent) returns(google.protobuf.Empty); //client streaming
    rpc GetFilePath (FileInfo) returns (FilePath); //unary
}

message FileInfo{
    string fileName = 1;
    string fileExtension = 2;
}

message BytesContent{
    int64 fileSize = 1;
    bytes buffer = 2;
    int32 readedByte = 3;
    FileInfo info = 4;
}

message FilePath{
    string filePath = 1;
}

```

In the proto file above, we specify our functions to be communicated using gRPC with the **"service"** keyword by defining only their signatures as we do in the interfaces. The **"protoc compiler"** takes care of implementing the rest of the communication methods. Our first function is FileDownload, which uses the **Server-Streaming** method:

```protobuf
rpc FileDownLoad (FileInfo) returns (stream BytesContent); //server streaming
```

The FileDownload function above says that it will receive a request of type **FileInfo** and return **BytesContent** as a **stream**. After installing the necessary libraries on the server side, we do not need to do any development as I said above to use this communication method, we only need to implement business logic. **(Server Streaming)**

```protobuf
rpc FileUpLoad (stream BytesContent) returns(google.protobuf.Empty); //client stream
```

The FileUpload function will return a response of type **google.protobuf.Empty** the **BytesContent** request, which is of type **stream**, made by the **client**. This data type can be considered as a **"void"** definition in protobuf **(Client Streaming)**

```protobuf
rpc GetFilePath (FileInfo) returns (FilePath); //unary
```

Our last function, GetFilePath, declares that it will return the FilePath response to the request of type FileInfo by the client. **(Unary)**

Now let's examine **message** definitions:

```protobuf
message FileInfo{
    string fileName = 1;
    string fileExtension = 2;
}
```

Above we see a FileInfo element defined with the **message** keyword. We can liken this definition to defining special Request/Response types, or DTO structures with class/interface for Request/Response parameters in order for the client and server to stay in sync and communicate over the same type of data while developing REST API. In this way, the **protoc compiler** will define FileInfo in the relevant language and allow us to communicate over this data type.

In gRPC, fields are assigned a specific **"Field Order"** indicated by numbers next to the values. This ensures that data is sent in a specific order, with the *"fileName"* being sent first, followed by the *"fileExtension"*.

```protobuf
message BytesContent{
    int64 fileSize = 1;
    bytes buffer = 2;
    int32 readedByte = 3;
    FileInfo info = 4;
}
```

We can see that the **FileInfo** type is defined **in the** **BytesContent** data type. Yes, gRPC allows us to use other messages within a message type. In fact, if you need this data as an **array**, you can do it with the **repeated** keyword.

### 2. Creating a .NET Core gRPC Server:

2.1. Create the Project (you can also find it in Visual Studio by searching for "gRPC"):

```bash
dotnet new grpc -o GrpcFileServer
cd GrpcFileServer
```

**2.2.** Add the `file.proto` file under the `Protos` folder and make sure that the `.csproj` file looks like the following:

```xml
<ItemGroup>
  <Protobuf Include="Protos\file.proto" GrpcServices="Server" />
</ItemGroup>
```

**2.3.** Create the `FileService.cs` file under the `Services` folder and replace its contents with the contents of the `FileService.cs` file provided above. This service file defines file upload, download, and file path import functions.

```csharp
using Grpc.Core;
using Google.Protobuf;
using Microsoft.AspNetCore.Hosting;
using System;
using System.IO;
using System.Threading.Tasks;

namespace GrpcFileServer.Services
{
    public class FileService : FileServiceBase
    {
        private readonly IWebHostEnvironment _webHostEnvironment;

        public FileService(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        public override async Task<Empty> FileUpLoad(IAsyncStreamReader<BytesContent> requestStream, ServerCallContext context)
        {
            // Handle the FileUpLoad operation
            // Read chunks of data from the client and process them
        }

        public override async Task FileDownLoad(FileInfo request, IServerStreamWriter<BytesContent> responseStream, ServerCallContext context)
        {
            // Handle the FileDownLoad operation
            // Send chunks of data to the client
        }

        public override Task<FilePath> GetFilePath(FileInfo request, ServerCallContext context)
        {
            // Handle the GetFilePath operation
            // Return file path
        }
    }
}
```

**2.3.1. FileUpLoad Method**

```csharp
public override async Task<Empty> FileUpLoad(IAsyncStreamReader<BytesContent> requestStream, ServerCallContext context)
{
	string path = Path.Combine(_webHostEnvironment.WebRootPath, "files");
	if (!Directory.Exists(path))
	    Directory.CreateDirectory(path);
	
	FileStream fileStream = null;
	
	try
	{
	    int count = 0;
	
	    //for uploaded rate
	    decimal chunkSize = 0;
	
	    while (await requestStream.MoveNext())
	    {
	        //Stream ilk başladığında(ilk adımda) yapılması gereken öncelikli işlevler
	        if (count++ == 0)
	        {
	            string filePath = $"{path}/{requestStream.Current.Info.FileName}{requestStream.Current.Info.FileExtension}";
	            fileStream = new FileStream(filePath, FileMode.CreateNew);
	
	            //Gelecek dosya boyutu kadar alan tahsis ediliyor.
	            fileStream.SetLength(requestStream.Current.FileSize);
	        }
	
	        var buffer = requestStream.Current.Buffer.ToByteArray();
	
	        await fileStream.WriteAsync(buffer, 0, requestStream.Current.ReadedByte);
	
	        chunkSize += requestStream.Current.ReadedByte;
	        decimal uploadedRate = Math.Round((chunkSize * 100) / requestStream.Current.FileSize);
	        Console.WriteLine($"{uploadedRate}%");
	    }
	    Console.WriteLine("Uploaded!");
	
	}
	catch (Exception ex)
	{
	    Console.WriteLine("Exception: " + ex.ToString());
	}
	finally { 
	    if (fileStream != null) { 
	        await fileStream.DisposeAsync();
	        fileStream.Close();
	    } 
	}
	return new Empty();
}
```

You've implemented the **`FileUpLoad`** method, which is used for **client-streaming**. This method takes an **`IAsyncStreamReader<BytesContent>`** as a parameter, which allows the client to stream data to the server. This method handles file uploads.

- It creates a target directory to store uploaded files if it doesn't exist.
- It iterates through the incoming data stream and saves it to a file. The **`requestStream.MoveNext()`** method is used to check if there's more data coming.
- The upload progress is logged to the console.
- Finally, an **`Empty`** response is sent back to the client to indicate a successful upload.

**2.3.2. FileDownload Method**

```csharp
public override async Task FileDownLoad(FileInfo request, IServerStreamWriter<BytesContent> responseStream, ServerCallContext context)
{
    string path = Path.Combine(_webHostEnvironment.WebRootPath, "files");

    string filePath = $"{path}/{request.FileName}{request.FileExtension}";
    try
    {
        bool isFileExist = File.Exists(filePath);
        if (!isFileExist) throw new FileNotFoundException(filePath);

        using FileStream fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);

        byte[] buffer = new byte[2048];

        BytesContent content = new BytesContent
        {
            FileSize = fileStream.Length,
            Info = new FileInfo { FileName = request.FileName + "_gRPC_FileService", FileExtension = request.FileExtension },
            ReadedByte = 0
        };

        while ((content.ReadedByte = fileStream.Read(buffer, 0, buffer.Length)) > 0)
        {
            //Okunan buffer'ın stream edilebilmesi için 'message.proto' dosyasındaki 'bytes' türüne dönüştürülüyor.
            content.Buffer = ByteString.CopyFrom(buffer);
            await responseStream.WriteAsync(content);
        }
        fileStream.Close();
    }catch (Exception ex)
    {
        Console.WriteLine(ex.ToString());
    }
}
```

The **`FileDownLoad`** method handles server-streaming. It takes a **`FileInfo`** as input and streams the file data back to the client.

- It constructs the path to the requested file and checks if the file exists.
- If the file exists, it reads the file in chunks and sends these chunks to the client as **`BytesContent`** messages. The client can then reconstruct the file from these chunks.
- If there are any exceptions, they are logged.

**2.3.3. GetFilePath Method**

```csharp
public override Task<FilePath> GetFilePath(FileInfo request, ServerCallContext context)
{
  string path = Path.Combine(_webHostEnvironment.WebRootPath, "files");
  string filePath = $"{path}/{request.FileName}{request.FileExtension}";
  bool isFileExist = File.Exists(filePath);

  return Task.FromResult(isFileExist ? 
      new FilePath() { FilePath_ = filePath }
      : throw new FileNotFoundException(filePath));
}
```

The **`GetFilePath`** method is a unary RPC method. It takes a **`FileInfo`** and returns a **`FilePath`** indicating the path of the requested file.

- It constructs the path to the requested file and checks if the file exists.
- If the file exists, it returns a **`FilePath`** with the file path.
- If the file doesn't exist, it throws a **`FileNotFoundException`**.

### 3. Creating a Nest.js gRPC Client:

**3.1.** Create a new Nest.js project:

```bash
npx nest new GrpcFileClient
cd GrpcFileClient
```

**3.1.1. Dependencies**

You start by importing the necessary dependencies:

- **`Inject`** and **`Injectable`** are from **`@nestjs/common`** and are used for dependency injection.
- **`Observable`** and **`ReplaySubject`** are used for handling asynchronous operations from **rxjs**.
- **`ClientGrpc`** is from **`@nestjs/microservices`** and provides client functionalities for gRPC.

**3.2.** Add the `file.proto` file to your project and use this file to create the TypeScript service file with the `protoc` tool:

```bash
protoc --proto_path=./ --js_out=import_style=commonjs,binary:./src --grpc_out=./src --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` file.proto
```

This command creates the files `file_pb.js` and `file_grpc_pb.js`.

**3.3.** Create `file.service.ts` and `file.controller.ts`

```tsx
import {
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { FilePath } from 'src/file';

@Controller('file-controller')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get('download')
  async download(@Req() req: Request): Promise<void> {
    const { fileName, fileExtension } = req.query;
    const info = {
      fileName: fileName as string,
      fileExtension: fileExtension as string,
    };
    return this.fileService.fileDownLoad(info);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    await this.fileService.fileUpLoad(file);
  }

  @Get('get-file-path')
  async getFilePath(@Req() req: Request): Promise<FilePath> {
    const { fileName, fileExtension } = req.query;

    const info = {
      fileName: fileName as string,
      fileExtension: fileExtension as string,
    };

    return this.fileService.getFilePath(info);
  }
}
```

**3.3.1.** **Constructor and Initialization**
You create a class called **`FileService`** and use the **`@Inject`** decorator to inject the gRPC client instance, which was configured with the name "FILE_PACKAGE" during the client setup.

- In the **`onModuleInit`** method, you initialize the gRPC client and obtain the **`FileServiceClient`** instance for making gRPC calls.

```tsx
/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Observable, ReplaySubject } from 'rxjs';
import { ClientGrpc } from '@nestjs/microservices';
import { FileServiceClient, FILE_SERVICE_NAME, FileInfo, BytesContent, FilePath } from '../file';
import { writeFile } from 'fs';

@Injectable()
export class FileService {
  private fileService;
  constructor(
    @Inject("FILE_PACKAGE")
    private grpcClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.fileService = this.grpcClient.getService<FileServiceClient>(FILE_SERVICE_NAME);
  }
}
```

**3.3.2 File Download**

```tsx
 async fileDownLoad(info: FileInfo): Promise<void> {
    const fileStream: Observable<BytesContent> =
      this.fileService.fileDownLoad(info);

    // create file from stream
    const fileData: BytesContent = {
      buffer: Buffer.alloc(0),
      fileSize: 0,
      info: {
        fileName: '',
        fileExtension: '',
      },
      readedByte: 0,
    };

    // write file when stream is completed
    await new Promise((resolve) => {
      fileStream.subscribe({
        next: (resFile: BytesContent) => {
          fileData.buffer = Buffer.concat([fileData.buffer, resFile.buffer]);
          fileData.fileSize = resFile.fileSize;
          fileData.info = resFile.info;
          fileData.readedByte = resFile.readedByte;
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          writeFile(
            `${fileData.info!.fileName}${fileData.info!.fileExtension}`,
            fileData.buffer,
            (err) => {
              if (err) {
                console.error(err);
                return;
              }
              console.log(
                `${fileData.info!.fileName}${
                  fileData.info!.fileExtension
                } was saved successfully.`,
              );
            },
          );
        },
      });
      resolve(fileData);
    });
  }
```

You implement the **`fileDownLoad`** method, which is responsible for downloading files from the server using server-streaming.

- It first gets an **`Observable`** of **`BytesContent`** by calling **`this.fileService.fileDownLoad(info)`**. This observable represents the server's response.
- The method then creates an empty **`fileData`** object to collect the downloaded file.
- A promise is used to handle the stream subscription.
- Inside the subscription, the method listens for new chunks of data in the stream and concatenates them to **`fileData.buffer`**.
- When the stream completes, it writes the downloaded file to the local filesystem.

**3.3.3. File Upload**

```tsx
async fileUpLoad(file: Express.Multer.File): Promise<void> {
    const subject = new ReplaySubject<BytesContent>();
    const chunkSize = 2048;  // Chunk size set to 2 KB
    const totalChunks = Math.ceil(file.size / chunkSize);
    const fileStream = file.buffer;

    const upload = this.fileService.fileUpLoad(subject).subscribe();

    for (let i = 0; i < totalChunks; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, file.size);
      const chunk = fileStream.subarray(start, end);

      const content: BytesContent = {
        buffer: chunk,
        fileSize: file.size,
        info: {
          fileName: file.originalname.split('.').shift()!,
          fileExtension: "." + file.originalname.split('.').pop()!,
        },
        readedByte: chunk.length,
      };

      // ReplaySubject is used to send each chunk to the server
      subject.next(content);
    }

    // Complete the stream once all chunks have been sent
    subject.complete();

    // Optionally, handle the response or errors from the server
    upload.unsubscribe();
  }
```

The **`fileUpLoad`** method is responsible for uploading files to the server using client-streaming.

- It creates a **`ReplaySubject<BytesContent>`** to send chunks of data to the server.
- The method calculates the chunk size and total chunks to upload the file in manageable parts.
- It iterates through the file, sending each chunk to the server using the **`subject.next(content)`** method.
- After all chunks are sent, the stream is completed with **`subject.complete()`**.

********3.3.4. GetFilePath********

```tsx
getFilePath(info: FileInfo): FilePath {
  return this.fileService.getFilePath(info);
}
```

The **`getFilePath`** method is a simple unary RPC call. It takes a **`FileInfo`** and returns a **`FilePath`** indicating the path of the requested file.

**3.4.** Configure the gRPC client configuration in the main.ts file:

```tsx
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5000', //grpc server's url
      package: 'file',
      protoPath: join(__dirname, './file.proto'),
    },
  });
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
```

### 4. Test

And it's finally done! Now you can excitedly launch Nest.js gRPC client and .NET core gRPC server and test file uploads and downloads.

grpc client: 

[https://github.com/haliltokszz/gRPC-client-FileService](https://github.com/haliltokszz/gRPC-client-FileService)

grpc server: 

[https://github.com/haliltokszz/gRPC-server-FileService](https://github.com/haliltokszz/gRPC-server-FileService)

## Conclusion

gRPC is a powerful communication framework that offers high-performance and efficient communication between services. It provides a modern alternative to traditional communication protocols like REST or GraphQL, with features like compact binary encoding, bidirectional streaming, and language-agnostic support. By understanding the core principles of gRPC and comparing them to other protocols, developers can make informed decisions on when and how to use gRPC effectively in their applications.

## References

1. [Introduction to gRPC | gRPC](https://grpc.io/docs/what-is-grpc/introduction/)
2. [How does gRPC work?](https://blog.bytebytego.com/p/ep32-how-does-grpc-work)
3. [The Difference Between gRPC and REST](https://aws.amazon.com/tr/compare/the-difference-between-grpc-and-rest/)
4. [Understanding gRPC, OpenAPI, and REST and when to use them](https://cloud.google.com/blog/products/api-management/understanding-grpc-openapi-and-rest-and-when-to-use-them)
5. [REST, GraphQL, and gRPC: A System Design Comparison](https://www.designgurus.io/blog/REST-GraphQL-gRPC-system-design)
6. [gRPC on .NET Core](https://learn.microsoft.com/en-US/dotnet/architecture/cloud-native/grpc)
7. [gRPC Nedir ve Nasıl Uygulanır? (Microservice Mimarisi ile gRPC)](https://medium.com/deliveryherotechhub/grpc-nedir-ve-nas%C4%B1l-uygulan%C4%B1r-microservice-mimarisi-ile-grpc-9f1dc0847475)
8. [gRPC – File Streaming Nasıl Gerçekleştirilir? – Yazılım Mimarileri ve Tasarım Desenleri Üzerine (gencayyildiz.com)](https://www.gencayyildiz.com/blog/grpc-file-streaming-nasil-gerceklestirilir/)
9. [gRPC Nedir, Ne Amaçla ve Nasıl Kullanılır?](https://www.gencayyildiz.com/blog/grpc-nedir-ne-amacla-ve-nasil-kullanilir/)