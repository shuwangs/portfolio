from collections import Counter
def count_items(lst):
    """ Count the occurences of each item in a list. """
    """ This function takes a list as input and returns a dictionary
    where the keys are the unique items from the list and the values
    are the counts of those items in the list. """

    # Initialize an empty dictionary to store the counts
    
    counts = {}
    for item in lst:
        if item in counts:
            counts[item] +=1
        else:
            counts[item] = 1
    return counts

def count_items_v2(lst):
    """ This function use the Counter class from the colection module."""
    return dict(Counter(lst))

def most_common_item(lst):
    """ Return the most common item in a list. """
    """ This function takes a list as input and returns the item that
    appears most frequently in the list. If there are multiple items
    with the same highest frequency, it returns one of them. """

    counts = count_items(lst)
    max_count = 0
    most_common = None
    for item, count in counts.items():
        if count > max_count:
            max_count = count
            most_common = item
    return most_common
