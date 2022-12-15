import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-respository";
import {   SendNotification } from "./send-notification";

describe('Send notificaiton',() => {
  it('should be able to sendo a notificaiton', async() => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'this is a notification',
      category: 'social',
      recipientId: 'exemple=recipient-id'
    })

    expect(notificationsRepository.notifications).toHaveLength(1)
    expect(notificationsRepository.notifications[0]).toEqual(notification)
  })
}) 