/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getService = `query GetService($id: ID!) {
  getService(id: $id) {
    id
    title
    description
    owner
  }
}
`;
export const listServices = `query ListServices(
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      owner
    }
    nextToken
  }
}
`;
export const getProvider = `query GetProvider($id: ID!) {
  getProvider(id: $id) {
    id
    title
    description
    email
    status
    phone
    resources {
      id
      provider
      title
      description
      status
      point {
        type
      }
      owner
    }
    consumers {
      id
      content
      email
      phone
      providers {
        id
        title
        description
        email
        status
        phone
        url
      }
      schedule {
        id
        title
        description
        status
        datetimes
        owner
      }
      url
      owner
    }
    services {
      id
      title
      description
      owner
    }
    url
  }
}
`;
export const listProviders = `query ListProviders(
  $filter: ModelProviderFilterInput
  $limit: Int
  $nextToken: String
) {
  listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      email
      status
      phone
      resources {
        id
        provider
        title
        description
        status
        owner
      }
      consumers {
        id
        content
        email
        phone
        url
        owner
      }
      services {
        id
        title
        description
        owner
      }
      url
    }
    nextToken
  }
}
`;
export const getResource = `query GetResource($id: ID!) {
  getResource(id: $id) {
    id
    provider
    title
    description
    status
    point {
      type
      geometry {
        type
        coordinates
      }
      properties {
        id
        lat
        lon
      }
    }
    owner
  }
}
`;
export const listResources = `query ListResources(
  $filter: ModelResourceFilterInput
  $limit: Int
  $nextToken: String
) {
  listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      provider
      title
      description
      status
      point {
        type
      }
      owner
    }
    nextToken
  }
}
`;
export const getSchedule = `query GetSchedule($id: ID!) {
  getSchedule(id: $id) {
    id
    title
    description
    status
    datetimes
    consumers {
      id
      content
      email
      phone
      providers {
        id
        title
        description
        email
        status
        phone
        url
      }
      schedule {
        id
        title
        description
        status
        datetimes
        owner
      }
      url
      owner
    }
    owner
  }
}
`;
export const listSchedules = `query ListSchedules(
  $filter: ModelScheduleFilterInput
  $limit: Int
  $nextToken: String
) {
  listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      status
      datetimes
      consumers {
        id
        content
        email
        phone
        url
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const getConsumer = `query GetConsumer($id: ID!) {
  getConsumer(id: $id) {
    id
    content
    email
    phone
    providers {
      id
      title
      description
      email
      status
      phone
      resources {
        id
        provider
        title
        description
        status
        owner
      }
      consumers {
        id
        content
        email
        phone
        url
        owner
      }
      services {
        id
        title
        description
        owner
      }
      url
    }
    schedule {
      id
      title
      description
      status
      datetimes
      consumers {
        id
        content
        email
        phone
        url
        owner
      }
      owner
    }
    url
    owner
  }
}
`;
export const listConsumers = `query ListConsumers(
  $filter: ModelConsumerFilterInput
  $limit: Int
  $nextToken: String
) {
  listConsumers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      email
      phone
      providers {
        id
        title
        description
        email
        status
        phone
        url
      }
      schedule {
        id
        title
        description
        status
        datetimes
        owner
      }
      url
      owner
    }
    nextToken
  }
}
`;
export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    title
    description
    status
  }
}
`;
export const listTasks = `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      status
    }
    nextToken
  }
}
`;
export const getPrivateNote = `query GetPrivateNote($id: ID!) {
  getPrivateNote(id: $id) {
    id
    content
    owner
  }
}
`;
export const listPrivateNotes = `query ListPrivateNotes(
  $filter: ModelPrivateNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      owner
    }
    nextToken
  }
}
`;
