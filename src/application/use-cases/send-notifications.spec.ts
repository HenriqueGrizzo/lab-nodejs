import { SendNotification } from "./send-notification"
import { inMemoryNotificationsRepository } from "test/repositories/in-memory-notifications-respository"

describe('Send Notification', () => {
  it('Should be able to send a notification',async() => {
    const notificationsRepository = new inMemoryNotificationsRepository
    const sendNotification = new SendNotification(notificationsRepository)

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id'
    })
    
    expect(notificationsRepository.notifications).toHaveLength(1)
  })
})