export function get_order_id(user_id: string, event_code: string): string {
    // Custom Logic can be implimented here.
    return user_id + '-' + event_code + '-' + Date.now();
}
