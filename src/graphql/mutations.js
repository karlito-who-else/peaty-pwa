/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createService = `mutation CreateService($input: CreateServiceInput!) {
  createService(input: $input) {
    id
    title
    description
    owner
  }
}
`;
export const updateService = `mutation UpdateService($input: UpdateServiceInput!) {
  updateService(input: $input) {
    id
    title
    description
    owner
  }
}
`;
export const deleteService = `mutation DeleteService($input: DeleteServiceInput!) {
  deleteService(input: $input) {
    id
    title
    description
    owner
  }
}
`;
export const createProvider = `mutation CreateProvider($input: CreateProviderInput!) {
  createProvider(input: $input) {
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
export const updateProvider = `mutation UpdateProvider($input: UpdateProviderInput!) {
  updateProvider(input: $input) {
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
export const deleteProvider = `mutation DeleteProvider($input: DeleteProviderInput!) {
  deleteProvider(input: $input) {
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
export const createResource = `mutation CreateResource($input: CreateResourceInput!) {
  createResource(input: $input) {
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
export const updateResource = `mutation UpdateResource($input: UpdateResourceInput!) {
  updateResource(input: $input) {
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
export const deleteResource = `mutation DeleteResource($input: DeleteResourceInput!) {
  deleteResource(input: $input) {
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
export const createSchedule = `mutation CreateSchedule($input: CreateScheduleInput!) {
  createSchedule(input: $input) {
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
export const updateSchedule = `mutation UpdateSchedule($input: UpdateScheduleInput!) {
  updateSchedule(input: $input) {
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
export const deleteSchedule = `mutation DeleteSchedule($input: DeleteScheduleInput!) {
  deleteSchedule(input: $input) {
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
export const createConsumer = `mutation CreateConsumer($input: CreateConsumerInput!) {
  createConsumer(input: $input) {
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
export const updateConsumer = `mutation UpdateConsumer($input: UpdateConsumerInput!) {
  updateConsumer(input: $input) {
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
export const deleteConsumer = `mutation DeleteConsumer($input: DeleteConsumerInput!) {
  deleteConsumer(input: $input) {
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
export const createTask = `mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
    id
    title
    description
    status
  }
}
`;
export const updateTask = `mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
    id
    title
    description
    status
  }
}
`;
export const deleteTask = `mutation DeleteTask($input: DeleteTaskInput!) {
  deleteTask(input: $input) {
    id
    title
    description
    status
  }
}
`;
export const createPrivateNote = `mutation CreatePrivateNote($input: CreatePrivateNoteInput!) {
  createPrivateNote(input: $input) {
    id
    content
    owner
  }
}
`;
export const updatePrivateNote = `mutation UpdatePrivateNote($input: UpdatePrivateNoteInput!) {
  updatePrivateNote(input: $input) {
    id
    content
    owner
  }
}
`;
export const deletePrivateNote = `mutation DeletePrivateNote($input: DeletePrivateNoteInput!) {
  deletePrivateNote(input: $input) {
    id
    content
    owner
  }
}
`;
