/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateService = `subscription OnCreateService($owner: String!) {
  onCreateService(owner: $owner) {
    id
    title
    description
    owner
  }
}
`;
export const onUpdateService = `subscription OnUpdateService($owner: String!) {
  onUpdateService(owner: $owner) {
    id
    title
    description
    owner
  }
}
`;
export const onDeleteService = `subscription OnDeleteService($owner: String!) {
  onDeleteService(owner: $owner) {
    id
    title
    description
    owner
  }
}
`;
export const onCreateProvider = `subscription OnCreateProvider {
  onCreateProvider {
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
export const onUpdateProvider = `subscription OnUpdateProvider {
  onUpdateProvider {
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
export const onDeleteProvider = `subscription OnDeleteProvider {
  onDeleteProvider {
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
export const onCreateResource = `subscription OnCreateResource($owner: String!) {
  onCreateResource(owner: $owner) {
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
export const onUpdateResource = `subscription OnUpdateResource($owner: String!) {
  onUpdateResource(owner: $owner) {
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
export const onDeleteResource = `subscription OnDeleteResource($owner: String!) {
  onDeleteResource(owner: $owner) {
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
export const onCreateSchedule = `subscription OnCreateSchedule($owner: String!) {
  onCreateSchedule(owner: $owner) {
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
export const onUpdateSchedule = `subscription OnUpdateSchedule($owner: String!) {
  onUpdateSchedule(owner: $owner) {
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
export const onDeleteSchedule = `subscription OnDeleteSchedule($owner: String!) {
  onDeleteSchedule(owner: $owner) {
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
export const onCreateConsumer = `subscription OnCreateConsumer($owner: String!) {
  onCreateConsumer(owner: $owner) {
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
export const onUpdateConsumer = `subscription OnUpdateConsumer($owner: String!) {
  onUpdateConsumer(owner: $owner) {
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
export const onDeleteConsumer = `subscription OnDeleteConsumer($owner: String!) {
  onDeleteConsumer(owner: $owner) {
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
export const onCreateTask = `subscription OnCreateTask {
  onCreateTask {
    id
    title
    description
    status
  }
}
`;
export const onUpdateTask = `subscription OnUpdateTask {
  onUpdateTask {
    id
    title
    description
    status
  }
}
`;
export const onDeleteTask = `subscription OnDeleteTask {
  onDeleteTask {
    id
    title
    description
    status
  }
}
`;
export const onCreatePrivateNote = `subscription OnCreatePrivateNote($owner: String!) {
  onCreatePrivateNote(owner: $owner) {
    id
    content
    owner
  }
}
`;
export const onUpdatePrivateNote = `subscription OnUpdatePrivateNote($owner: String!) {
  onUpdatePrivateNote(owner: $owner) {
    id
    content
    owner
  }
}
`;
export const onDeletePrivateNote = `subscription OnDeletePrivateNote($owner: String!) {
  onDeletePrivateNote(owner: $owner) {
    id
    content
    owner
  }
}
`;
export const onCreateTodo = `subscription OnCreateTodo {
  onCreateTodo {
    id
    name
    description
  }
}
`;
export const onUpdateTodo = `subscription OnUpdateTodo {
  onUpdateTodo {
    id
    name
    description
  }
}
`;
export const onDeleteTodo = `subscription OnDeleteTodo {
  onDeleteTodo {
    id
    name
    description
  }
}
`;
